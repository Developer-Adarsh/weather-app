

let inp = document.querySelector('.input')
let searchBtn = document.querySelector('.button')
let weatherIcon = document.querySelector('.weather-icon')
let weather = document.querySelector('.weather')
let error = document.querySelector('.error')

let apiKey = '60dde1e7f79b272783877116e1b9acb0'
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  var data = await response.json()

  if (response.status == 404) {
    error.style.display = 'block'
    weather.style.display = 'none'
  } else {
    document.querySelector('#temp').innerHTML =
      Math.round(data.main.temp) + '°C'
    document.querySelector('#city').innerHTML = data.name
    document.querySelector('#humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('#wind').innerHTML = data.wind.speed + ' km/hr'

    if (data.weather[0].main == 'Rain') {
      weatherIcon.src = '/images/images/rain.png'
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = '/images/images/clear.png'
    } else if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = '/images/images/clouds.png'
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = '/images/images/drizzle.png'
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = '/images/images/mist.png'
    }

    weather.style.display = 'block'
    error.style.display = 'none'
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(inp.value)
})
