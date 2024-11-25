import { Body, Column, Container, Head, Heading, Hr, Html, Img, Preview, Row, Section, Tailwind, Text } from "@react-email/components";

import { OrderEmailProps } from "@/typings";

export default function OrderEmail({ sender, senderEmail, cartItems, totalAmount }: OrderEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Regal Hive Receipt</Preview>
      <Tailwind>
        <Body className="font-mono text-zinc-900">
          <Container>
            <Section className="bg-[#FBC000]">
              <Row>
                <Column className="pl-1">
                  <Img
                    src='https://i.postimg.cc/zvhMsnGn/regal-Hive-Logo.png'
                    width="42"
                    height="42"
                    alt="Regal Hive Logo"
                  />
                </Column>

                <Column align="right" >
                  <Text className="pr-2">Receipt</Text>
                </Column>
              </Row>
            </Section>
            <Section className="mt-12">
              <Heading className="text-center text-base">Thank you for your order {sender}!</Heading>
            </Section>

            <Section>
              <Text className="text-base bg-[#FBC000] text-zinc-900 p-2">Order Details:</Text>
            </Section>

            <Section className="bg-stone-100 pl-4">
              <Row >
                <Column>
                  <Section>
                    <Row>
                      <Column className="flex gap-1">
                        <Text className="font-semibold">Name:</Text>
                        <Text> {sender}</Text>
                      </Column>
                    </Row>
                    <Row>
                      <Column className="flex gap-1">
                        <Text className="font-semibold">Email:</Text>
                        <Text> {senderEmail}</Text>
                      </Column>
                    </Row>
                  </Section>
                </Column>

              </Row>
            </Section>

            <Section>
              <Text className="text-base bg-[#FBC000] text-zinc-900 p-2">Order Summary:</Text>
            </Section>

            <Section>
              {cartItems.map((item, i) =>
                <Row key={i}>
                  <Column style={{ width: "64px" }}>
                    <Img
                      src={item.product_img}
                      width="64"
                      height="64"
                      alt="Product photo"
                    />
                  </Column>
                  <Column className="pl-5">
                    <Text>{item.product_name}</Text>
                    <Text>Quantity: x{item.quantity}</Text>
                  </Column>

                  <Column align="right">
                    <Text className="pr-3">${(item.quantity * item.product_price).toFixed(2)}</Text>
                  </Column>
                </Row>
              )}

            </Section>
            <Hr />
            <Section align="right" className="w-full bg-stone-100">
              <Row className="px-4">
                <Column className="">
                  <Text className="text-[0.7rem]">*Note: No actual order is being proccessed.</Text>
                </Column>
                <Column align="right">
                  <Text className="font-light">TOTAL</Text>
                  <Text className="font-bold">${totalAmount}</Text>
                </Column>
              </Row>
            </Section>
            <Hr />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
