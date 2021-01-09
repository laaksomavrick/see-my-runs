import format from "date-fns/format";
import fromUnixTime from "date-fns/fromUnixTime";

const API_KEY = "9a8edfa0d4a7bff7a326dfea81f673af";

// TODO: leverage caching (3hrs) in localStorage

export type WeatherType = "Clear" | "Clouds" | "Snow" | "Rain";

export interface Weather {
  date: Date;
  humanizedDate: string;
  humanizedDayOfWeek: string;
  temperature: {
    day: number;
    night: number;
    morning: number;
    evening: number;
  };
  humanizedTemperature: {
    day: string;
    night: string;
    morning: string;
    evening: string;
  };
  humidity: number;
  weatherType: WeatherType;
  weatherDescription: string;
}

export const getWeatherData = async (
  lat: number,
  lon: number
): Promise<Weather[] | null> => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${API_KEY}`;
    const fetched = await fetch(url);
    const json = await fetched.json();
    const daily = json.daily;
    const results = mapWeatherData(daily);
    return results;
  } catch (e) {
    return null;
  }
};

export const mapWeatherData = (dailies: any[]): Weather[] => {
  const mapped = [];

  for (const daily of dailies) {
    const date = fromUnixTime(daily.dt);
    const humanizedDate = format(date, "LLLL do");
    const humanizedDayOfWeek = format(date, "EEEE");
    const temperature = daily.temp;
    const humidity = daily.humidity;

    const weather = daily.weather[0];
    const weatherType = weather.main;
    const weatherDescription = weather.description;

    const data: Weather = {
      date,
      humanizedDate,
      humanizedDayOfWeek,
      temperature: {
        day: temperature.day,
        evening: temperature.eve,
        night: temperature.night,
        morning: temperature.morn,
      },
      humanizedTemperature: {
        day: getHumanizedTemperature(temperature.day),
        evening: getHumanizedTemperature(temperature.eve),
        night: getHumanizedTemperature(temperature.night),
        morning: getHumanizedTemperature(temperature.morn),
      },
      humidity,
      weatherType,
      weatherDescription,
    };

    mapped.push(data);
  }

  return mapped;
};

const getHumanizedTemperature = (temp: number): string => {
  const rounded = Math.round(temp);
  return `${rounded} °C`;
};
