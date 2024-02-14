import React from "react";
import { useAPP } from "../../utils/context";
import { formatedTime } from "../../utils/formatDate";
import windIcon from "../../assets/weather/wind_dir.png";
export default function Hourly_forecast() {
  const { weatherState, weatherIndex } = useAPP();
  if (!weatherState) {
    return null;
  }
  const forecast_data = weatherState.forecast?.forecastday[weatherIndex].hour;
  console.log(forecast_data);

  return (
    <div>
      <h1>Погодинний прогноз</h1>
      <ul style={{ display: "flex", width: "60vw", overflow: "auto" }}>
        {forecast_data?.map((item) => {
          const localDateTime = new Date(item.time);
          return (
            <li
              key={item.date}
              style={{
                width: "10wv",
                marginRight: "1vw",
                borderRadius: "10px",
                padding: "10px 15px",
                backgroundColor: "grey",
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
