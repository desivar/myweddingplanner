const weatherIcon = document.getElementById("weathericon");
const weatherDesc = document.getElementById("weatherdesc");
const weatherTemp = document.getElementById("temperature");
const weatherWind = document.getElementById("windspeed");

const apiKey = "16039ac7b5c146a7ba2160124251902"; // Your API key
let city = "London"; // Default city

async function getTheWeather(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching weather:", error); // More specific error message
        // You might want to display a message to the user here
        weatherDesc.textContent = "Error fetching weather."; // Example
        weatherTemp.textContent = "?";
        weatherWind.textContent = "?";
        weatherIcon.src = ""; // Clear the icon
    }
}

function displayResults(weatherData) {
    if (weatherData && weatherData.weather && weatherData.weather[0] && weatherData.main && weatherData.wind) { // Check if the data exists
        const iconCode = weatherData.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct icon URL
        const desc = weatherData.weather[0].description;
        const temp = weatherData.main.temp;
        const windSpeed = weatherData.wind.speed;

        weatherIcon.src = iconUrl;
        weatherIcon.alt = desc;
        weatherDesc.textContent = desc; // Display the description
        weatherTemp.textContent = `${temp.toFixed(0)}°F`; // Display temperature with °F symbol
        weatherWind.textContent = `${windSpeed.toFixed(0)} mph`; // Display wind speed with mph
    } else {
        console.error("Invalid weather data received:", weatherData);
        weatherDesc.textContent = "Invalid weather data.";
        weatherTemp.textContent = "?";
        weatherWind.textContent = "?";
        weatherIcon.src = "";
    }
}


// Initial weather fetch
let apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
getTheWeather(apiURL);

// ... (Add city search functionality as needed - same as before) ...
// Image Slider JavaScript
const imageSlider = document.querySelector('.image-slider');
const images = imageSlider.querySelectorAll('img');
let currentImageIndex = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

setInterval(nextImage, 3000);
showImage(currentImageIndex);