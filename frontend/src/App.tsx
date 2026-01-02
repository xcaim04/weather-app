import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import getWeatherData from "./services/weatherServices";
import { weatherData } from "./types/weatherData";
import { NotFound } from "./components/NotFound";
import Hello from "./components/Hello";

const App: React.FC = () => {
    const [weatherData, setWeatherData] = useState<weatherData | null>(null);
    const [dataFound, setDataFound] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (location: string) => {
        setIsLoading(true);
        const data = await getWeatherData(location);
        if (data) {
            setWeatherData(data);
            setDataFound(true);
            console.log("Found it");
        } else {
            setWeatherData(null);
            setDataFound(false);
        }
        setIsLoading(false);
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <div className="card">
                <div className="container-styles">
                    {isLoading ? (
                        <div className="spinner"></div> // Use the CSS spinner
                    ) : dataFound ? (
                        weatherData != null ? (
                            weatherData && (
                                <WeatherCard weatherData={weatherData} />
                            )
                        ) : (
                            <Hello />
                        )
                    ) : (
                        <NotFound />
                    )}
                </div>
            </div>
        </>
    );
};

export default App;
