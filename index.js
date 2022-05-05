

//weather
//fetch('https://api.openweathermap.org/data/2.5/weather?q=Belfast&cnt=5&units=metric&appid=25419fc66df6465e6d2c90e8f096f2f5')

//forecast
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=25419fc66df6465e6d2c90e8f096f2f5')
  .then(response => response.json())
  .then(data => 
  {
        console.log(data)
        const {daily} = data
        let currentPop = document.getElementById("display-pop")

        function temp(){
            daily.forEach(pop => {
              currentPop.innerHTML += `<li> ${data.daily[0].pop} </li>`
            });

  }
temp()
})

