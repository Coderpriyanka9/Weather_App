const apiKey = "a8809ccc26e151ee68aa9f98e384d061";
document.getElementById("btn").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("result").innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
                    `;
            } else {
                document.getElementsById("result").innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => console.error("Error fetching the weather:", error));
}    