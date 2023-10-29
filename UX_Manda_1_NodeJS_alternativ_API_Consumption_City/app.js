require('dotenv').config()

const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// TODO: If conditions to be replaced by try and catch to avoid unexpected answers from APIs
app.post("/", async (req, res) => {
  let city = req.body.city

  let HTMLText = `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UX API Consumption City NodeJS Alternative Solution</title>
  <link rel="stylesheet" href="./styles/style.css">
  <script src="./scripts/script.js" defer></script>
</head>

<body>
  <header>
    <div class="headers-image-container">
      <img class="headers-image" src="./images/kea.png" alt="KEA logo">
    </div>

    <h1>API Consumption City</h1>
  </header>
  <main>
  <section class="search-results">
    `

  let apiKeyOpenWeather = process.env.APIKEYWEATHER

  let urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKeyOpenWeather}`

  const responseWeather = await fetch(urlWeather)
  const weatherAndCityJSON = await responseWeather.json();

  if (weatherAndCityJSON.cod === 200) {
    const latitude = weatherAndCityJSON.coord.lat
    const longitude = weatherAndCityJSON.coord.lon

    HTMLText += `
  <h3>${weatherAndCityJSON.name}, ${weatherAndCityJSON.sys.country}</h3>
  <p>${weatherAndCityJSON.weather[0].main}</p>
  <p> ${weatherAndCityJSON.main.temp}°C</p>  
  <p> feels like ${weatherAndCityJSON.main.feels_like}°C</p> 
  <p> ${weatherAndCityJSON.main.humidity}%</p> 
  <p> ${weatherAndCityJSON.wind.speed}m/s</p> 
  <p> Latitude: ${weatherAndCityJSON.coord.lat}</p> 
  <p> Longitude: ${weatherAndCityJSON.coord.lon}</p> 
  `

    let apiKeyMap = process.env.APIKEYMAP

    let urlMap = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${longitude},${latitude},9,0/300x200?access_token=${apiKeyMap}`

    HTMLText += `<img src='${urlMap}'>`
  }
  else {
    HTMLText += '<p>City not found</p>'
  }

  let apiKeyTicketmaster = process.env.APIKEYEVENTS

  let urlEvents = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKeyTicketmaster}&locale=*&city=${city}`;

  const responseEvents = await fetch(urlEvents)
  const eventsJSON = await responseEvents.json();


  console.log(eventsJSON.page.totalElements);

  HTMLText += `<h4>Events</h4>`

  if (eventsJSON.page.totalElements > 0) {
    events = eventsJSON._embedded.events
    HTMLText += `<table>`

    for (let i = 0; i < events.length; i++) {
      HTMLText += `<tr><td>${events[i].name}</td></tr>`
    }
    HTMLText += `</table>`
  }
  else {
    HTMLText += '<p>No Events</p>'
  }

  HTMLText += '<a href="/">Search again</a>'

  HTMLText += `
  </section>
  </main>
  <footer class="footer">
    <p id="copyrightParagragraph">
    </p>
  </footer>
</body>

</html>`
  res.send(HTMLText)

});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log("Server running on port", server.address().port);
});

