import { ContactEmailProps } from "@/typings";
import { Body, Column, Heading, Hr, Html, Img, Row, Tailwind, Text } from "@react-email/components";


export default function ContactEmail({ sender, senderEmail, senderMessage }: ContactEmailProps) {
  return (
    <Html lang="en">
      <Tailwind>
        <Body className="text-center text-zinc-900">
          <Row className="bg-[#fbc000]">
            <Column className="">
              <Img className="mx-auto pt-2" src="https://i.postimg.cc/zvhMsnGn/regal-Hive-Logo.png" alt="Regal Hive's Logo" />
              <Heading className="font-mono">Regal Hive</Heading>
            </Column>
          </Row>
          <Hr className="w-full" />
          <Row className="bg-stone-100 font-sans rounded-b px-3 py-1">
            <Column>
              <Text className="text-base">
                You have a new message from:
              </Text>
              <Text>{sender} | {senderEmail}</Text>
              <Text>&quot; {senderMessage} &quot;</Text>
            </Column>
          </Row>
        </Body>
      </Tailwind>
    </Html>
  )
}
