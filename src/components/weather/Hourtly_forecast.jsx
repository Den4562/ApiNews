import React from "react";
import { useAPP } from "../../utils/context";
import { formatedTime } from "../../utils/formatDate";
import windIcon from "../../assets/weather/wind_dir.png";
import s from "../../style/weather_local.module.css";

export default function Hourly_forecast() {
  const { weatherState, weatherIndex } = useAPP();
  if (!weatherState) {
    return null;
  }
  const forecast_data = weatherState.forecast?.forecastday[weatherIndex].hour;
  console.log(forecast_data);

  return (
    <div className={s.containerHourtly}>
      <h1>Hourly forecast</h1>
      <ul className={s.elementsHourtly} style={{ display: "flex" }}>
        {forecast_data?.map((item, index) => {
          const localDateTime = new Date(item.time);
          // Вычисляем индекс для цвета фона
          const colorIndex = Math.floor(index / 3) % 3;
          let backgroundGradient; // Определение переменной перед использованием
          // Создаем градиент в зависимости от индекса
          switch (colorIndex) {
            case 0:
              backgroundGradient = "linear-gradient(to top, #f0c85e, #f0a41c)";
              break;
            case 1:
              backgroundGradient = "linear-gradient(to top, #817799,#6556a7)";
              break;
            case 2:
              backgroundGradient = "linear-gradient(to top, #f08080, #cd5c5c)";
              break;
            default:
              backgroundGradient = "none";
          }
          return (
            <li
              key={item.date}
              style={{
                width: "10wv",
                marginRight: "1vw",
                borderRadius: "10px",
                padding: "10px 15px",
                backgroundImage: backgroundGradient,
              }}
            >
              <p>{formatedTime(localDateTime)}</p>
              <img src={item.condition.icon} alt="" />
              <p>{Math.round(item.temp_c)}C</p>
              <img
                src={windIcon}
                alt=""
                style={{ rotate: `${item.wind_degree}deg` }}
              />
              <p>{item.wind_kph} км/</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
