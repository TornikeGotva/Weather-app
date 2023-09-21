"use strict";

const YOUR_API_KEY = "22d938e1c2794c81851122855230608";

const weatherInfo = document.querySelector(".third_container");
const getWeatherBtn = document.getElementById("weatherBtn");
const errorMessage = document.querySelector(".error-message");

const getAPI = async function () {
  try {
    let WeatherValue = document.querySelector(".input").value;
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${WeatherValue}`
    );
    const data = await res.json();

    const getInfo = `<img src="${data.current.condition.icon}" alt="weather icon">
                  <p class="celcius">${data.current.temp_c}°C</p>
                  <p class='weather-update'>${data.current.condition.text}</p>
                  <div class="weather-info">
                  <p>${data.current.feelslike_c}°C</p>
                  <p>Humidity ${data.current.humidity}</p>
                  <p>${data.current.temp_f}°F</p>
                  <p>Wind ${data.current.wind_kph}km/h</p>
                  <p>${data.location.country}</p>`;

    weatherInfo.insertAdjacentHTML("afterbegin", getInfo);

    console.log(res);
  } catch (err) {
    errorMessage.textContent = "❌Incorrect. Try again!";
  }
};

getWeatherBtn.addEventListener("click", function (e) {
  let WeatherValue = document.querySelector(".input").value;

  e.preventDefault();
  weatherInfo.classList.remove("container-opacity");
  weatherInfo.innerHTML = "";
  errorMessage.textContent = "";
  getAPI(WeatherValue);
});
