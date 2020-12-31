import { Flex, Text } from "@chakra-ui/react";
import { Weather } from "../data/weather";

export const MyRunList: React.FC<{ days: Weather[] }> = ({ days }) => {
  return (
    <Flex direction="column">
      {days.map((d) => (
        <MyRunListItem key={d.date.toString()} day={d} />
      ))}
    </Flex>
  );
};

export const MyRunListItem: React.FC<{ day: Weather }> = ({ day }) => {
  return (
    <Flex direction="column" py={[2]}>
      <Flex pb={[1]}>
        <Text fontWeight="semibold">{day.humanizedDate}</Text>
      </Flex>
      <Text>Humidity: {day.humidity}%</Text>
      <Text>Conditions: {day.weatherType}</Text>
      <Flex>
        <MyRunListDailyTemperature day={day} />
      </Flex>
    </Flex>
  );
};

export const MyRunListDailyTemperature: React.FC<{ day: Weather }> = ({
  day,
}) => {
  const temps = day.humanizedTemperature;
  return (
    <Flex direction="column">
      <Text>Temperatures</Text>
      <Flex>
        <Text fontWeight="">Morning: {temps.morning}</Text>
      </Flex>
      <Flex>
        <Text fontWeight="">Day: {temps.day}</Text>
      </Flex>
      <Flex>
        <Text fontWeight="">Evening: {temps.evening}</Text>
      </Flex>
      <Flex>
        <Text fontWeight="">Night: {temps.night}</Text>
      </Flex>
    </Flex>
  );
};
