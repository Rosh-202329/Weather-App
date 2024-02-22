import React, { useEffect, useState } from "react";
 
const WeatherCard = ({tempInfo}) =>{
    const[weatherstate, setWeatherState] = useState("");
    const{temp, humidity, pressure, weathermood,name,country,speed,sunset}=tempInfo;

    useEffect(() =>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":setWeatherState("wi-day-cloudy");
                break;
                case "Haze":setWeatherState("wi-day-fog");
                break;
                case "Clear":setWeatherState("wi-day-sunny");
                break;
                case "Mist":setWeatherState("wi-dust");
                break;
                case "Smoke":setWeatherState("wi-day-cloudy-windy");
                break;
                default:setWeatherState("wi-dy-sunny");
                break;
            }
        }
    }, [weathermood]);

    //converting second in time
    let sec = sunset;
    let date= new Date(sec*1000);
    let timestr =`${date.getHours()}:${date.getMinutes()} `;
    return (
        <>
        <article className="widget">
        <div className="weatherIcon">
            <i className={`wi ${weatherstate}`}></i>
        </div>

        <div className="weatherInfo">
            <div className="temperature">
                <span>{temp}&deg;</span>
            </div>
            <div className="description">
                <div className="weatherCondition">{weathermood}</div>
                <div className="place">{name}, {country}</div>
            </div>
            </div>

            <div className="date"> {new Date().toLocaleString()} </div>

            {/* our 4 column section */}

            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <i className={"wi wi-sunset"}></i>
                        <p className="extra-info-leftside">{timestr}<br />Sunset</p>
                    </div>
            
                    <div className="two-sided-section">
                        <i className={"wi wi-humidity"}></i>
                        <p className="extra-info-leftside">{humidity} <br />Humidity</p>
                    </div>
                </div>
                <div className="weather-extra-info">
                <div className="two-sided-section">
                        <i className={"wi wi-rain"}></i>
                        <p className="extra-info-leftside">{pressure}<br />Pressure</p>
                    </div>
                    <div className="two-sided-section">
                        <i className={"wi wi-strong-wind"}></i>
                        <p className="extra-info-leftside">{speed} <br />Speed</p>
                    </div>
                </div>
            </div>

        
       </article>

        </>
    )
}
export default WeatherCard;