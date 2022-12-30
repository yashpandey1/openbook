import React, {useEffect, useState} from "react";
import "./css/style.css";

const Weatherapp = function() {

    const [city, setCity] = useState(null);
    const [search, setSearch ] = useState("");

    useEffect( () => {
        const fetchapi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8026d3534aa3fce55eb1b682379afd02`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }  
        fetchapi();
    },[search])

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"  placeholder=""
                        className="inputField"
                        onChange={ (event) => {
                            setSearch(event.target.value)
                        }} />
                </div>
                {!city ? (
                    <div>
                    <div className="info">
                    <h1 className="locationpre"> 
                    <i class="fa-solid fa-hand-point-up"></i>
                    </h1>
                    <h1 className="temp">                  
                    </h1>
                    <h3 className="tempmin_maxpre"> Hey ! Enter city name <br /></h3>
                </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                    </div>
                ) : 
                (
                    <div>
                    <div className="info">
                    <h2 className="location"> 
                    <i class="fa-solid fa-location-dot"></i>
                    <br />
                    {search}
                    </h2>
                    <h1 className="temp">
                    <i class="fa-solid fa-temperature-half"></i> {city.temp}°C
                    </h1>
                    <h3 className="tempmin_max">Min : {city.temp_min}°C || Max : {city.temp_max}°C</h3>
                </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                    </div>
                )}
            </div>
        </>
    )
};
export default Weatherapp;