let apikey = "4ea762c1b5400d1950abfb2a1eae9d2c";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let inputsearch = document.querySelector("input");
let buttonsearch = document.querySelector("button");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".show-data").style.display = "none";
        document.querySelector(".error").style.display = "block";
    } else {
        let data = await response.json();

        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity-num").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";

        document.querySelector(".img-of-weather img").src = `imgs/${data.weather[0].main}.png`;
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".show-data").style.display = "block";
    }
}

buttonsearch.addEventListener("click" ,() => {
    checkweather(inputsearch.value)
})