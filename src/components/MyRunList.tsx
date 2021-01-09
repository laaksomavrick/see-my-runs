import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { Weather, WeatherType } from "../data/weather";
import {
  IoWater,
  IoSunny,
  IoPartlySunny,
  IoSnow,
  IoRainy,
} from "react-icons/io5";
import React from "react";

// What is a good run period?
// Conditions are acceptable
// Humidity is acceptable
// Temperature is acceptable

export const MyRunList: React.FC<{ days: Weather[] }> = ({ days }) => {
  return (
    <Grid
      templateColumns={["repeat(auto-fit, minmax(450px, 1fr))"]}
      justifyItems="center"
      gap={6}
    >
      {days.map((d) => (
        <MyRunListItem key={d.date.toString()} day={d} />
      ))}
    </Grid>
  );
};

export const MyRunListItem: React.FC<{ day: Weather }> = ({ day }) => {
  return (
    <Flex
      direction="column"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="2px"
      w="100%"
      maxW="450px"
      userSelect="none"
      p={[4]}
    >
      {/* header */}
      <Flex pb={[4]} alignItems="center">
        <Flex direction="column">
          <Text fontSize="2xl" fontWeight="semibold">
            {day.humanizedDayOfWeek}
          </Text>
          <Text fontSize="sm" color="gray.400" marginTop="-6px">
            {day.humanizedDate}
          </Text>
        </Flex>
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
    <Flex justifyContent="space-between" width="100%">
      <DailyTemperature label="Morning" temperature={temps.morning} />
      <DailyTemperature label="Day" temperature={temps.day} />
      <DailyTemperature label="Evening" temperature={temps.evening} />
      <DailyTemperature label="Night" temperature={temps.night} />
    </Flex>
  );
};

export const DailyTemperature: React.FC<{
  label: string;
  temperature: string;
}> = ({ label, temperature }) => {
  return (
    <Flex direction="column">
      <Text fontSize="xl" fontWeight="">
        {label}
      </Text>
      <Box>
        <Text fontSize="2xl">{temperature}</Text>
      </Box>
    </Flex>
  );
};
