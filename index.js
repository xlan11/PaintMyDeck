const apiUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=54.59&lon=5.93&units=metric&exclude=hourly,minutely&appid=25419fc66df6465e6d2c90e8f096f2f5";

const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long", month :"long", day: "numeric" });

const dateFormatOptions = {
  timeZone: "GMT",
  timeStyle: "short",
  hour12: false,
};

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const { daily, current, weather, sunrise, sunset } = data;
    const weatherCard = document.getElementById("display-weather-card");
    const cards = getWeatherForecast(daily);
    weatherCard.innerHTML += cards.join(" ");
  });

function getWeatherForecast(weeklyWeather) {
  return weeklyWeather.map((day) => {
    const currentDate = new Date(day.dt * 1000);
    // console.log((Date(day.dt * 1000)))
    const sunriseTime = new Date(day.sunrise * 1000);
    const sunsetTime = new Date(day.sunset * 1000);
    let shouldPaintDeck = "";

    if ((day.pop * 100 ) < 5) {
      shouldPaintDeck = "Today would be a GREAT day to paint! 😍";
    }
    else if ((day.pop * 100) > 5 && (day.pop * 100) < 25){
      shouldPaintDeck = "Today would be a good day to paint! 🙂"
    }

    return generateHtml({
      weatherIcon: day.weather[0].icon,
      dayOfWeek: dateFormatter.format(currentDate),
      shouldPaintDeck,
      tempCurrent: Math.floor(day.temp.day),
      tempMin: Math.floor(day.temp.min),
      tempMax: Math.floor(day.temp.max),
      precipitationChance: Math.floor(day.pop * 100),
      sunriseTime: sunriseTime.toLocaleTimeString("en-US", dateFormatOptions),
      sunsetTime: sunsetTime.toLocaleTimeString("en-US", dateFormatOptions),
    });
  });
}

function generateHtml({
  weatherIcon,
  dayOfWeek,
  shouldPaintDeck,
  tempCurrent,
  tempMin,
  tempMax,
  precipitationChance,
  sunriseTime,
  sunsetTime,
}) {
  return `
    <div class="weather-card">
      <li>
        <span class="weather-icon"><img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png"/></span>
        <span class="weather-day"><h2>${dayOfWeek}</h2></span>
        <span class="yes-paint"><p>${shouldPaintDeck}</p></span><br/>
        <span class="weather-temp">Temp: ${tempCurrent}° (Min: ${tempMin}° - Max: ${tempMax})°<br/></span>  
        <span class="weather-pop">Precipitation chance: ${precipitationChance}%<br/></span>
        <span class="weather-sunrise">Sunrise: ${sunriseTime} <br/></span>
        <span class="weather-sunset">Sunset: ${sunsetTime}</span>
      </li>
    </div>
  `;
}
