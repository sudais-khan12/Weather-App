const key = "8c535b3194ff9d0e49649941d5071e9c";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let search = document.querySelector(".input");
let button = document.querySelector(".btn");
let image = document.querySelector(".show");
let show = document.querySelector(".new");
let loader = document.querySelector(".hide");
let changer = document.querySelector(".slider");
let body = document.querySelector("body");
let shadow = document.querySelector(".card");
let mode = "light";

async function CheckWeather(city) {
  let response = await fetch(url + city + `&appid=${key}`);

  if (response.status == 404) {
    loader.style.display = "none";
    show.style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    loader.style.display = "none";
    show.style.display = "block";
    let data = await response.json();
    console.log(data);
    let status = data.weather[0].main;
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector("#humidity").innerText = ` ${data.main.humidity}%`;
    document.querySelector("#windi").innerText = ` ${data.wind.speed}°C`;
    document.querySelector(".status").innerHTML = status;
    console.log(status);

    if (status == "Clouds") {
      image.src = "img/overcast.png";
    } else if (status == "Clear") {
      image.src =
        "img/—Pngtree—cartoon cartoon sun lifelike realistic_3922002.png";
    } else if (status == "Rain") {
      image.src =
        "img/png-transparent-rain-cloud-storm-weather-rain-text-cloud-animation-thumbnail.png";
    } else if (status == "Drizzle") {
      image.src = "img/—Pngtree—drizzling clouds_5624360.png";
    } else if (status == "Smoke") {
      image.src =
        "img/pngtree-daytime-foggy-weather-clouds-illustration-picture-image_8201381.png";
    }
    document.querySelector(".error").style.display = "none";
  }
}

let darkMode = () => {
  if (mode == "light") {
    mode = "dark";
    body.style.backgroundColor = "black";
    shadow.classList.add("change");
  } else {
    mode = "light";
    body.style.backgroundColor = "#799294";
    shadow.classList.remove("change");
  }
};

button.addEventListener("click", () => {
  CheckWeather(search.value);
  loader.style.display = "block";
});

changer.addEventListener("click", () => {
  darkMode();
});
