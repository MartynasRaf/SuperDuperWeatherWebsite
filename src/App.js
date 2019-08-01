import React from 'react';
import './App.css';
import WeatherCardList from './WeatherCardList'
import HourlyForecast from './HourlyForecast'

function App() {


  return (
    <div>
     <h1>Super Duper Weather Website</h1>
    <WeatherCardList />
    <HourlyForecast />
    <div className="Bar" />

    </div>
  );
}


export default App;
