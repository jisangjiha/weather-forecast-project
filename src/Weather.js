import { useState } from "react";
//import classes from "./Weather.module.css";

function Weather() {
  const API_KEY = "bc2d29eb0537c40c6c2d2b8aa7f9d816";

  const [weatherData, setWeatherData] = useState();

  function onGeoOk(position) {
    const lat = position.coords.latitude; //경도
    const lon = position.coords.longitude; //위도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        /* const weather = document.querySelector("#weather div:first-child");
        const city = document.querySelector("#weather div:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}C°`;
        city.innerText = `@${data.name}`; */
      });
  }

  //main - temp.min temp.max humidity

  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

  return (
    <div>
      <div>{weatherData?.weather[0].main}</div>
      <div>{weatherData?.main.temp}C°</div>
      <div>{weatherData?.name}</div>
    </div>
  );
}

export default Weather;
