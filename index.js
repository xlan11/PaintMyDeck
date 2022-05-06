

//weather
//fetch('https://api.openweathermap.org/data/2.5/weather?q=Belfast&cnt=5&units=metric&appid=25419fc66df6465e6d2c90e8f096f2f5')

//forecast
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=55.12&lon=6.55&&units=metric&exclude=hourly,minutely&appid=25419fc66df6465e6d2c90e8f096f2f5')
  .then(response => response.json())
  .then(data => 
  {
        console.log(data)
        const {daily} = data
        const weeklyWeather = daily
        let currentPop = document.getElementById("display-pop")

        function precipitation(){
            weeklyWeather.forEach(day => {
              currentPop.innerHTML += `<li> ${day.pop * 100} %</li>`
            });

  }
precipitation()
})

