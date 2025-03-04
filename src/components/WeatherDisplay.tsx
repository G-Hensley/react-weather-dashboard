import { useContext, useEffect, useState } from "react";
import { UnitContext } from "../context/UnitContext";
import { WeatherData } from "../types";
import api from "../util/WeatherFetch";

export default function WeatherDisplay(
    {lat, lon}: {lat: number, lon: number}
    ) 
{
    const {Unit} = useContext(UnitContext);

    const [weatherData, setWeatherData] = useState<WeatherData>();

    useEffect(() => {
            api.get(`weather?lat=${lat}&lon=${lon}&units=${Unit}`).then((response) => {
            setWeatherData(response.data);
        })
    }, [Unit, lat, lon]);
    
    return (

        <section className="bg-cyan-200 p-4 rounded-lg shadow-md">
            <h2 className="text-3xl text-center">{weatherData?.name}</h2>
            <hr className="w-full mx-auto border-t-2 border-black"/>
            <div className="grid grid-cols-2 gap-4 mt-4 text-lg">
                <div className="weather-data bg-cyan-100 shadow-md">
                    <p>Temperature</p>
                    <p>{Math.round(weatherData?.main?.temp || 0)} °{Unit === 'imperial' ? 'F' : 'C'}</p>
                </div>
                <div className="weather-data bg-cyan-100 shadow-md">
                    <p>Humidity</p>
                    <p>{weatherData?.main?.humidity}%</p>
                </div>
                <div className="weather-data bg-cyan-100 shadow-md">
                    <p>Wind Speed</p>
                    <p>{Math.round(weatherData?.wind?.speed || 0)} {Unit === 'imperial' ? 'mph' : 'km/h'}</p>
                </div>
                <div className="weather-data bg-cyan-100 shadow-md">
                    <p>Weather</p>
                    <p>{weatherData?.weather[0].main}</p>
                </div>
                </div>
        </section>

    )

}
