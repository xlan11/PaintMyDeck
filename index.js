//Los Angeles
//fetch('https://api.openweathermap.org/data/2.5/onecall?lat=34.05&lon=118.24&units=metric&exclude=hourly,minutely&appid=25419fc66df6465e6d2c90e8f096f2f5')
//belfast
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=54.59&lon=5.93&units=metric&exclude=hourly,minutely&appid=25419fc66df6465e6d2c90e8f096f2f5')

  .then(response => response.json())

  .then(data =>

  {

        console.log(data)
        const {daily, current, weather, sunrise, sunset} = data
        // const icon = `https://openweathermap.org/img/wn/${daily.weather[0]["icon"]}@2x.png`
        let currentPop = document.getElementById("display-pop")
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        let todayNumber = d.getDay();
        let today = "";
        

        function GetDailyChanceOfRain(weeklyWeather){
          weeklyWeather.forEach(day => {     
            timestamp = day.dt
            test = new Date(timestamp  * 1000 );
            test.getDay();

            sunriseTime = new Date(day.sunrise * 1000)
              let sunriseHours = sunriseTime.getHours()
              let sunriseMinutes = sunriseTime.getMinutes()
              let sunriseTimeFormatted = "0" + sunriseHours + ":" + sunriseMinutes

            sunsetTime = new Date(day.sunset * 1000)
              let sunsetHours = sunsetTime.getHours()
              let sunsetMinutes = sunsetTime.getMinutes()
              let sunsetTimeFormatted = sunsetHours + ":" + sunsetMinutes
            
              currentPop.innerHTML +=
              `
              <div id="weather-card">
                <li>
                  <span id="weather-icon"><img src="https://openweathermap.org/img/wn/${daily[0].weather[0].icon}.png"/></span>
                  <span id="weather-day"><h2>${weekday[test.getDay()]}</h2></span>
                  <span id="weather-temp">Temp: ${(Math.floor(day.temp.day))}° (Min: ${(Math.floor(day.temp.min))}° - Max: ${(Math.floor(day.temp.max))})°<br/></span>  
                  <span id="weather-pop">Precipitation chance: ${(Math.floor(day.pop * 100))}%<br/></span>
                  <span id="weather-sunrise">Sunrise: ${sunriseTimeFormatted} <br/></span>
                  <span id="weather-sunset">Sunset: ${sunsetTimeFormatted}</span>
                </li>
              </div>
              `
            });
  }
  GetDailyChanceOfRain(daily)
})
