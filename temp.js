import React, { useEffect, useState } from "react";
import "./style.css"
import WeatherCard from "./weatherCard";

const Temp = () =>{
      const [searchValue, setSearchValue] = useState("Indore");
      const[tempInfo, setTempInfo] = useState({});


      const getWeatherInfo = async () =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=093836c8af669a2ff57a1d0b13e02d85`;
        const res = await fetch(url);
        const data =await res.json();
        const {temp, humidity, pressure} = data.main;
        const {main:weathermood} =data.weather[0];
        const {name} = data;
        const{speed} =data.wind;
        const {country, sunset} = data.sys;
        const myNewWeather ={
            temp,
             humidity,
             pressure,
             name,
              speed,
              weathermood,
              country,
              sunset
        };

        setTempInfo(myNewWeather);

       }  
        catch(error){
            console.log(error);
        }
      };

      useEffect(() =>{
        getWeatherInfo();
    }, []);



    return(
        <>
        <div className="wrap">
            <div className="search">
                <input type="search" placeholder="search..."
                autoFocus id="search" className="searchTerm" 
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}/>
                <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
            </div>
        </div>
        <WeatherCard tempInfo={tempInfo}/>
    
       
        </>
    );
};
export default Temp;