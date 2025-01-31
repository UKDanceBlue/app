import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Card>
      <Heading size="md">{question}</Heading>
      <Text size="sm">{answer}</Text>
    </Card>
  );
};

export default FAQItem;
