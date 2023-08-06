"use strict";

const YOUR_API_KEY = "22d938e1c2794c81851122855230608";

const weatherInfo = document.querySelector(".third_container");
const getWeatherBtn = document.getElementById("weatherBtn");

const getAPI = async function () {
  let WeatherValue = document.querySelector(".input").value;
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${WeatherValue}`
  );
  const data = await res.json();

  const getInfo = `<img src="${data.current.condition.icon}" alt="weather icon">
                  <p class="celcius">${data.current.temp_c}°C</p>
                  <p class='weather-update'>${data.current.condition.text}</p>
                  <div class="weather-info">
                  <p>Feels Like:${data.current.feelslike_c}</p>
                  <p>Feels Like:${data.current.feelslike_c}</p>
                  <p>Feels Like:${data.current.feelslike_c}</p>`;

  weatherInfo.insertAdjacentHTML("afterbegin", getInfo);

  console.log(data);
};

getWeatherBtn.addEventListener("click", function (e) {
  let WeatherValue = document.querySelector(".input").value;
  console.log(WeatherValue);
  e.preventDefault();
  weatherInfo.classList.remove("container-opacity");
  weatherInfo.innerHTML = "";
  getAPI(WeatherValue);
});
