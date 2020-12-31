import { Box, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { getWeatherData, Weather } from "../data/weather";

export const MyRunsPage: React.FC = () => {
  const [state] = useContext(AppContext);
  const [weather, setWeather] = useState<Weather[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const lat = state.requiredData?.location?.latitude;
    const lon = state.requiredData?.location?.longitude;

    if (lat == null || lon == null) {
      return;
    }

    (async () => {
      setLoading(true);
      const data = await getWeatherData(lat, lon);
      if (data == null) {
        setError(true);
      } else {
        setError(false);
        setWeather(data);
      }
      setLoading(false);
    })();
  }, [state, setWeather, setError]);

  return (
    <Box data-testid="myRunsPage">
      <div>loading: {loading}</div>
      <div>error: {error}</div>
      <div>data: {JSON.stringify(weather)}</div>
      <Text>See my runs!!!</Text>
    </Box>
  );
};
