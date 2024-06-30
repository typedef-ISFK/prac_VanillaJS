const API_KEY = "f30609b0bdd19b0f83bc183f954f8659"

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span");
        weather.innerText = `${data.weather[0].main}, ${Math.round(data.main.temp)}°C, ${data.name}`;
    });

}

function onGeoError() {
    alert("Can't find you. No weather info.");
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);