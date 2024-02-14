import { createContext, useContext, useState } from "react";
import { BASE_URL, WEATHER_PROFILE } from "./api_profile";

const AppContext = createContext();

export const useAPP = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState([]);
  const [weatherState, setWeather] = useState([]);
  const [weatherIndex, setWeatherIndex] = useState(0); // Додали стейт для індексу погоди
  const [isDarkMode, setDarkMode] = useState(false);
  console.log(isDarkMode);
  const get_data = async (...objValue) => {
    const searchValue = objValue[0] || "ukraine";

    try {
      const response = await fetch(
        `${BASE_URL.apiNews}/${BASE_URL.path}?q=${searchValue}&${BASE_URL.apiKey}`
      );
      const data = await response.json();
      setGlobalState(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getWeatherData = async (...objValue) => {
    const searchValue = objValue[0] || "auto:ip";
    try {
      const response = await fetch(
        `${WEATHER_PROFILE.start_url}${objValue[1]}?${WEATHER_PROFILE.api_key}&q=${searchValue}&aqi=yes&lang=uk&${objValue[2]}`
      );
      const data = await response.json();
      setWeather(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  function toogleTheme() {
    setDarkMode(!isDarkMode);
  }

  const updateWeatherState = (newIndex) => {
    setWeatherIndex(newIndex);
  };

  return (
    <AppContext.Provider
      value={{
        globalState,
        get_data,
        weatherState,
        getWeatherData,
        weatherIndex, // Додали індекс погоди в контекст
        updateWeatherState,
        toogleTheme,
        isDarkMode, // Додали функцію для оновлення індексу погоди в контекст
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
