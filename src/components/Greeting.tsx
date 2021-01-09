import { Flex, Text } from "@chakra-ui/react";
import { isBefore } from "date-fns";

export const Greeting: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Flex direction="column" pb={[4]}>
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        userSelect="none"
      >
        {getGreeting(name)}
      </Text>
    </Flex>
  );
};

const getGreeting = (name: string): string => {
  const now = new Date();

  const morningBound = new Date();
  morningBound.setHours(11);
  now.setMinutes(59);
  now.setMilliseconds(0);

  const isMorning = isBefore(now, morningBound);

  if (isMorning) {
    return `Good morning ${name}`;
  }

  const afternoonBound = new Date();
  afternoonBound.setHours(16);
  afternoonBound.setMinutes(59);
  afternoonBound.setMilliseconds(0);

  const isAfternoon = isBefore(now, afternoonBound);

  if (isAfternoon) {
    return `Good afternoon ${name}`;
  }

  return `Good evening ${name}`;
};
