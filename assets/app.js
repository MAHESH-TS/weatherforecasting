function getJaipurWeather()
{
   // const apikey='e09960f33589cfadeb753a253ce08984';

    const city = 'Jaipur';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const resultElement = document.getElementById('Jaipur-result');
            resultElement.innerHTML = `Temperature in ${city}: ${temp}°C`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            const resultElement = document.getElementById('Jaipur-result');
            resultElement.innerHTML = "Error fetching weather data.";
        });
}