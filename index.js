// let weather = {
//     "apiKey" : "25419fc66df6465e6d2c90e8f096f2f5",
//     "fetchWeather" : function(){
//         fetch('https://api.openweathermap.org/data/2.5/weather?q=Belfast&units=metric&appid='
//         + this.apiKey
//         )
//         .then(response => response.json())
//         .then(data => console.log(data));
//     },

//     // displayWeather : function(data){
//     //     const {name} = data
//     //     const {icon, description} = data.weather[0]
//     //     const {temp, humidity} = data.main
//     //     const {speed} = data.wind
//     //     console.log (name, icon, description, temp, humidity, speed)

//     // }
// }

fetch('https://api.openweathermap.org/data/2.5/weather?q=Belfast&cnt=5&units=metric&appid=25419fc66df6465e6d2c90e8f096f2f5')
  .then(response => response.json())
  .then(data => 
  {
        console.log(data)
        const { main, name, sys, weather} = data
        let currentTemp = (document.getElementById("display-temp"))
        function temp(){
            currentTemp.innerHTML = Math.floor(data.main.temp)
  }
temp()
})

