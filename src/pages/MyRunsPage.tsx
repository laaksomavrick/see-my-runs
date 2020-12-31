import { Box, Spinner } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Greeting } from "../components/Greeting";
import { MyRunList } from "../components/MyRunList";
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

  if (error) {
    return <div>something went wrong</div>;
  }

  if (loading || weather === undefined) {
    return <Spinner size="xl" />;
  }

  return (
    <Box data-testid="myRunsPage">
      <Greeting name={state.requiredData?.name || ""} />
      <MyRunList days={weather} />
    </Box>
  );
};
