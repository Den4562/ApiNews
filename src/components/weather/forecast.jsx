import React, { useEffect, useState } from "react";
import { useAPP } from "../../utils/context";
import s from "../../style/weather_local.module.css";
import { NavLink } from "react-router-dom";

const Forecast = () => {
  const { weatherState, updateWeatherState } = useAPP(); // Додано updateWeatherState
  const forecastData = weatherState.forecast?.forecastday;

  // Функція для форматування дати
  const formatDay = (date) => {
    const options = { weekday: "long", day: "numeric", month: "numeric" };
    return new Date(date).toLocaleDateString("uk-UA", options);
  };

  // Обробник кліку на елемент прогнозу
  function onCurrentForecastClick(e) {
    console.dir(e.currentTarget.id);
    // Знаходимо індекс елементу в масиві прогнозу
    const index = forecastData.findIndex(
      (item) => item.date === e.currentTarget.id
    );
    updateWeatherState(index);
  }

  return (
    <div
      className={`${s.container} ${s.current_container}`}
      style={{ display: "block", height: "auto", width: "18vw" }}
    >
      <h1 style={{ fontSize: "2vw" }}>5 Days forecast</h1>
      <ul>
        {forecastData?.map((item) => (
          <li
            onClick={onCurrentForecastClick}
            key={item.date}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            id={item.date}
          >
            {/* Виводимо іконку погоди */}
            <img
              src={item.day.condition.icon}
              alt={item.day.condition.text}
              style={{ width: "6vw" }}
            />

            {/* Виводимо середню температуру */}
            <p
              style={{
                fontSize: "12px",
                fontWeight: "900",
                marginRight: "2vw",
                marginLeft: "1vw",
              }}
            >
              {Math.round(item.day.avgtemp_c)}°C
            </p>

            {/* Виводимо форматовану дату */}
            <p style={{ fontSize: "12px" }}>{formatDay(item.date)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
