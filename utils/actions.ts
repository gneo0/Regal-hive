"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import arcjet, { detectBot, fixedWindow, request, shield } from "@arcjet/next";
import { z } from "zod";

import ContactEmail from "@/emails/contact-email";
import OrderEmail from "@/emails/order-email";
import { createClientServer } from "@/utils/supabase/server";
import { generateCouponCode } from "@/utils/helpers";
import {
  addItemToCart,
  decreaseQuantityDB,
  deleteCartItemDB,
  getCartItems,
  increaseQuantityDB,
} from "@/utils/supabase/data";
import { COUPON_DISCOUNT } from "@/utils/constants";
import { CouponFormPrevState, FormPrevState, ProductProps } from "@/typings";

const aj = arcjet({
  key: process.env.ARCJET_KEY!, // Get your site key from https://app.arcjet.com
  characteristics: ["ip.src"], // Track requests by IP
  rules: [
    // Shield protects your app from common attacks e.g. SQL injection
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        // See the full list at https://arcjet.com/bot-list
      ],
    }),
    fixedWindow({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      window: "1h", // 3600 seconds fixed window
      max: 6, // allow a maximum of 6 requests
    }),
  ],
});

export const login = async (prevState: FormPrevState, formData: FormData) => {
  const supabase = createClientServer();

  const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password field requires at least 6 character(s)." }),
  });

  const formInputs = {
    email: formData.get("loginEmail") as string,
    password: formData.get("loginPassword") as string,
  };

  const result = LoginFormSchema.safeParse(formInputs);

  if (!result.success) {
    return { success: false, message: result.error.errors[0].message };
  }

  const { error } = await supabase.auth.signInWithPassword(formInputs);

  if (error) {
    return { success: false, message: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
};

export const logout = async () => {
  const supabase = createClientServer();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/");
};

export const signup = async (prevState: FormPrevState, formData: FormData) => {
  const supabase = createClientServer();

  const SignupSchema = z.object({
    fullName: z
      .string()
      .min(1, { message: "Name field requires at least 1 character(s)." }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password field requires at least 6 character(s)." }),
  });

  const formInputs = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    couponCode: generateCouponCode(),
  };

  const result = SignupSchema.safeParse(formInputs);

  if (!result.success) {
    return { success: false, message: result.error.errors[0].message };
  }

  const { data, error: signupError } = await supabase.auth.signUp({
    email: formInputs.email as string,
    password: formInputs.password as string,
    options: {
      data: {
        name: formInputs.fullName,
        couponCode: formInputs.couponCode,
      },
    },
  });

  if (signupError) {
    return { success: false, message: signupError.message };
  }

  // Checking if the user already exists in database
  if (!data.user?.identities?.length) {
    return {
      success: false,
      message: `A user with the email ${formInputs.email} already exists! Please log-in with your existing account.`,
    };
  }

  revalidatePath("/login");
  return {
    success: true,
    message:
      "Sign-up almost completed. Check your e-mail inbox to confirm your sign-up!",
  };
};

export const applyCoupon = async (
  prevState: CouponFormPrevState,
  formData: FormData
) => {
  const supabase = createClientServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const couponCode = formData.get("coupon");

  if (!couponCode)
    return { success: false, message: "Coupon field cannot be empty!" };

  // Return error message in case coupons don't match
  if (user?.user_metadata.couponCode !== couponCode)
    return { success: false, message: "Invalid coupon code!" };

  return {
    success: true,
    message: "Coupon applied!",
    discount: COUPON_DISCOUNT,
  };
};

export const sendContactEmail = async (
  prevState: FormPrevState | undefined,
  formData: FormData
) => {
  try {
    // Access request data that Arcjet needs when you call `protect()`
    const req = await request();
    const decision = await aj.protect(req);
    console.log('DECISIONNNNNN:', decision);

    if (decision.isDenied()) {
      return {
        success: false,
        message: "Rate limit exceeded. Please try again later!",
      };
    }

    const ContactFormSchema = z.object({
      sender: z
        .string()
        .min(1, { message: "Name field requires at least 1 character(s)." }),
      senderEmail: z.string().email(),
      senderMessage: z.string().min(10, {
        message: "Message field requires at least 10 character(s).",
      }),
    });

    const formInputs = {
      sender: formData.get("contactName"),
      senderEmail: formData.get("contactEmail"),
      senderMessage: formData.get("message"),
    };

    const result = ContactFormSchema.safeParse(formInputs);

    if (!result.success) {
      return { success: false, message: result.error.errors[0].message };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: emailSent, error: emailError } = await resend.emails.send({
      from: "Regal Hive <contact@regalhive.org>",
      to: `${process.env.CONTACT_EMAIL}`,
      subject: "New message from a Regal Hive client.",
      react: ContactEmail({
        sender: formInputs.sender as string,
        senderEmail: formInputs.senderEmail as string,
        senderMessage: formInputs.senderMessage as string,
      }),
    });

    if (emailError) throw new Error();

    if (emailSent) {
      return {
        success: true,
        message: "We got your e-mail. We will contact with you soon!",
      };
    }
  } catch (error) {
    return {
      success: false,
      message:
        "Something went wrong with sending the e-mail! Please try again later.",
    };
  }
};

export const placeOrder = async (
  prevState: FormPrevState | undefined,
  formData: FormData
) => {
  try {
    const cartItems = await getCartItems();
    if (!cartItems?.length)
      return {
        message:
          "Your cart is empty! Visit our products page to add some products to cart.",
      };

    // Access request data that Arcjet needs when you call `protect()`
    const req = await request();
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      return {
        success: false,
        message: "Rate limit exceeded. Please try again later!",
      };
    }

    const OrderFormSchema = z.object({
      sender: z
        .string()
        .min(1, { message: "Name requires at least 1 character(s)." }),
      senderEmail: z.string().email(),
    });

    const formInputs = {
      sender: formData.get("orderName"),
      senderEmail: formData.get("orderEmail"),
      totalAmount: formData.get("totalAmount"),
    };

    const result = OrderFormSchema.safeParse(formInputs);

    if (!result.success) {
      return { success: false, message: result.error.errors[0].message };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data: emailSent } = await resend.emails.send({
      from: "Regal Hive <orders@regalhive.org>",
      to: `${formInputs.senderEmail}`,
      subject: "Regal Hive receipt 🎉",
      react: OrderEmail({
        sender: formInputs.sender as string,
        senderEmail: formInputs.senderEmail as string,
        cartItems: cartItems,
        totalAmount: formInputs.totalAmount as string,
      }),
    });

    if (emailSent)
      return {
        success: true,
        message:
          "Order placed successfully. Thank you for your order be sure to check your email for further details!",
      };
  } catch (error) {
    return {
      success: false,
      message:
        "Something went wrong with sending the e-mail! Please try again later.",
    };
  }
};

export const increaseQuantity = async (id: number) => {
  const result = await increaseQuantityDB(id);

  if (result instanceof Error) {
    return {
      error:
        result.message ||
        "Oops! Something went wrong with increasing item's quantity.",
    };
  }

  revalidatePath("/cart");
  return { error: null };
};

export const decreaseQuantity = async (id: number) => {
  const result = await decreaseQuantityDB(id);

  if (result instanceof Error) {
    return {
      error:
        result.message ||
        "Oops! Something went wrong with decreasing item's quantity.",
    };
  }

  revalidatePath("/cart");
  return { error: null };
};

export const addToCart = async (product: ProductProps) => {
  const result = await addItemToCart(product);

  if (result instanceof Error) {
    return {
      error:
        result.message ||
        "Oops! Something went wrong with adding item to cart.",
    };
  }

  revalidatePath("/cart");
  return { error: null };
};

export const removeItemFromCart = async (id: number) => {
  const result = await deleteCartItemDB(id);

  if (result instanceof Error) {
    return {
      error:
        result.message ||
        "Oops! Something went wrong with removing item from cart.",
    };
  }

  revalidatePath("/cart");
  return { error: null };
};
