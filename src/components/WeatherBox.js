import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("weather", weather)
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}℃/ {(weather?.main.temp*1.8+32).toFixed(1)}℉</h2>
      <h2>{weather?.weather[0].description}</h2>
    </div>
  )
}

export default WeatherBox