import { useState } from "react"
import axios from "axios"

function Weather()
{
     
    const [city,setCity]=useState("")

    const [weather,setweather]=useState("")
    const [temp,settemp]=useState("")
    const [desc,setdesc]=useState("")
    
    const handleCity=(evt)=>
        {
           setCity(evt.target.value)
        }

    const getWeather=()=>
        {
            let weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0632aed324d3469d86299b948d60668d`)

            weatherData.then(function(success){
            console.log(success);
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
         })
        }
    
        
   
    return(
    <div className="Weather-container" >
    <div className="weather-box">
        <h1>Weather Report</h1>
        <p>I can give you a weather report about your city!</p>
        <div className="input-box">
        <input onChange={handleCity} type="text" placeholder="Enter your city"></input>
        <button onClick={getWeather}>Get report</button>
        </div>
    </div>

    <div className="report-container">
        <div className="report-one">
        <h1>Weather</h1>
        <h3>{weather}</h3>
        </div>
        <div  className="report-two">
        <h1>Temperature</h1>
        <h3>{temp}</h3>
        </div>
        <div  className="report-three">
        <h1>Description</h1>
        <h3>{desc}</h3>
        </div>
    </div>

    </div>
   )
}



export default Weather