import React from 'react'
import sunnyImg from './Images/Sunny.png'
import overcastImg from './Images/Overcast.png'
import cloudyImg from './Images/Cloudy.png'
import rainyImg from './Images/Rainy.png'
import thunderImg from './Images/Thunder.png'

function WeatherCard(props){

    var imgToShow

    if (props.conditions===1) imgToShow=sunnyImg
    if (props.conditions===2) imgToShow=overcastImg
    if (props.conditions===3) imgToShow=cloudyImg
    if (props.conditions===4) imgToShow=rainyImg
    if (props.conditions===5) imgToShow=thunderImg
    


    return(
        <div onClick={e => console.log("Clicked")} className='WeatherCard'>
            <div className='Day'>{props.day}</div>
            <img className='Pic' src={imgToShow} alt='a' />
            <div className='Temperature'>{props.temp[0]}*C / {props.temp[1]}*C</div>
        </div>
    )

}




export default WeatherCard