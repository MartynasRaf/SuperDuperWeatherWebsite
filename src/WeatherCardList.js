import React from 'react'
import WeatherCard from './WeatherCard'
import WeatherData from './WeatherData'

function WeatherCardList(){

return(
<div>
    <ul>
        <li><WeatherCard day="Mon" temp={WeatherData[0]} conditions={WeatherData[0][2]} /></li>
        <li><WeatherCard day="Tue" temp={WeatherData[1]} conditions={WeatherData[1][2]} /></li>
        <li><WeatherCard day="Wed" temp={WeatherData[2]} conditions={WeatherData[2][2]} /></li>
        <li><WeatherCard day="Thu" temp={WeatherData[3]} conditions={WeatherData[3][2]} /></li>
        <li><WeatherCard day="Fri" temp={WeatherData[4]} conditions={WeatherData[4][2]} /></li>
      </ul>
</div>
)
}

export default WeatherCardList