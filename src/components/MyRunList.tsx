import { Flex, Icon, Text } from "@chakra-ui/react";
import { Weather, WeatherType } from "../data/weather";
import {
  IoWater,
  IoSunny,
  IoPartlySunny,
  IoSnow,
  IoRainy,
} from "react-icons/io5";

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
    <Flex
      direction="column"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="2px"
      p={[4]}
    >
      {/* header */}
      <Flex pb={[2]} alignItems="center">
        <Text fontSize="2xl" fontWeight="semibold">
          {day.humanizedDate}
        </Text>
        <Flex alignItems="center" ml="auto" width="auto">
          <HumidityIndicator humidity={day.humidity} />
          <ConditionsIndicator conditions={day.weatherType} />
        </Flex>
      </Flex>
      {/* temperature container */}
      <Flex>
        <MyRunListDailyTemperature day={day} />
      </Flex>
    </Flex>
  );
};

export const HumidityIndicator: React.FC<{ humidity: number }> = ({
  humidity,
}) => {
  return (
    <Flex alignItems="flex-end">
      <Icon as={IoWater} w={8} h={8} color="blue.400" />
      <Text fontSize="xl">{`${humidity}%`}</Text>
    </Flex>
  );
};

export const ConditionsIndicator: React.FC<{ conditions: WeatherType }> = ({
  conditions,
}) => {
  let icon;
  let color = "gray.400";
  switch (conditions) {
    case "Clear":
      icon = IoSunny;
      color = "yellow.400";
      break;
    case "Clouds":
      icon = IoPartlySunny;
      break;
    case "Snow":
      icon = IoSnow;
      color = "blue.200";
      break;
    case "Rain":
      icon = IoRainy;
      color = "blue.400";
      break;
    default:
      break;
  }

  return (
    <Flex ml={[4]}>
      <Icon as={icon} w={8} h={8} color={color} />
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
