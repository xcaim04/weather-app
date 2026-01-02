import { weatherData } from "../types/weatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faWind,
    faThermometerHalf,
    faTint,
} from "@fortawesome/free-solid-svg-icons";

import { getWeatherImage } from "../types/weatherImages";

interface WeatherCardProps {
    weatherData: weatherData;
}

enum WeekDay {
    Sunday = 0,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

const getWeekDayName = (): string => {
    const day = new Date().getDay();
    return WeekDay[day];
};

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
    const temp = Math.round(weatherData.temperature);

    const path = getWeatherImage(weatherData.description);

    return (
        <div className="weather-card split-card">
            <div className="details split-text">
                <div>
                    <h1 className="location">
                        <span>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
                        </span>
                        {weatherData.location}
                    </h1>

                    <h2>{getWeekDayName()}</h2>
                </div>

                <div className="properties-container">
                    <p className="properties">
                        <span className="icon">
                            <FontAwesomeIcon icon={faThermometerHalf} />
                        </span>
                        <strong>Temperature:</strong> {temp} &deg;C
                    </p>
                    <p className="properties">
                        <span className="icon">
                            <FontAwesomeIcon icon={faWind} />
                        </span>
                        <strong>Wind Speed:</strong> {weatherData.windSpeed}{" "}
                        Km/h
                    </p>
                    <p className="properties">
                        <span className="icon">
                            <FontAwesomeIcon icon={faTint} />
                        </span>
                        <strong>Humedity:</strong>
                        {weatherData.humedity} %
                    </p>
                </div>
            </div>
            <img src={path} />
        </div>
    );
};

export default WeatherCard;
