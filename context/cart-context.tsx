'use client';

import { toast } from "sonner";
import { createContext, use, useContext, useOptimistic, useState } from "react";

import { CartAction, CartContextTypes, CartProps, ProductProps } from "@/typings";
import { calculateCartTotalAmount } from "@/utils/helpers";
import { addToCart, decreaseQuantity, increaseQuantity, removeItemFromCart } from "@/utils/actions";

const CartContext = createContext<CartContextTypes | undefined>(undefined);

const cartReducer = (state: CartProps[], action: CartAction): CartProps[] => {
  switch (action.type) {
    case 'ADD_ITEM_CART':
      const { id: product_id, name: product_name, price: product_price, quantity, photo: product_img } = action.payload
      return [...state, { product_id, product_name, product_price, quantity, product_img }]

    case 'REMOVE_ITEM_CART':
      return state.filter(item => item.product_id !== action.payload)

    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.product_id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.product_id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0);

    default:
      return state
  }
}

export default function CartProvider({ children, cartPromise }: { children: React.ReactNode; cartPromise: Promise<CartProps[]> }) {
  const initialCart = use(cartPromise)
  const [optimisticCart, setOptimisticCart] = useOptimistic(initialCart, cartReducer)
  const [cartAmount, setCartAmount] = useState(calculateCartTotalAmount(optimisticCart, 0))
  const totalCartQuantity = optimisticCart?.reduce((acc, cartItem) => acc + cartItem.quantity, 0)

  const addCartItemOptimistic = async (product: ProductProps) => {
    setOptimisticCart({ type: 'ADD_ITEM_CART', payload: product })
    toast.loading(`${product.name} is being added to your cart...`)

    const { error } = await addToCart(product)
    if (!error) toast.success(`${product.name} successfully added to your cart!`)
    else toast.error(error)

    toast.dismiss()
  }

  const removeCartItemOptimistic = async (productId: number) => {
    setOptimisticCart({ type: 'REMOVE_ITEM_CART', payload: productId })
    const { error } = await removeItemFromCart(productId)
    if (error) toast.error(error)
  }

  const increaseQuantityOptimistic = async (productId: number) => {
    setOptimisticCart({ type: 'INCREASE_QUANTITY', payload: productId })
    const { error } = await increaseQuantity(productId)
    if (error) toast.error(error)
  }

  const decreaseQuantityOptimistic = async (productId: number) => {
    setOptimisticCart({ type: 'DECREASE_QUANTITY', payload: productId })
    const { error } = await decreaseQuantity(productId)
    if (error) toast.error(error)
  }

  return <CartContext.Provider value={{ optimisticCart, setOptimisticCart, totalCartQuantity, cartAmount, setCartAmount, addCartItemOptimistic, removeCartItemOptimistic, increaseQuantityOptimistic, decreaseQuantityOptimistic }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) throw new Error("useCart must be used within its CartProvider!")

  return context
}