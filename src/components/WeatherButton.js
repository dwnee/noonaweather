import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = () => {
  return (
    <div className="weather-button">
      <Button variant="primary">Current Location</Button>
      <Button variant="primary">Paris</Button>
      <Button variant="primary">New york</Button>
    </div>
  )
}

export default WeatherButton