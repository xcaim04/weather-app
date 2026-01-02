import axios from "axios";
import { weatherData } from "../types/weatherData";

const API_URL = import.meta.env.VITE_API_URL;

const getWeatherData = async (
    location: string
): Promise<weatherData | null> => {
    try {
        const response = await axios.get(
            `${API_URL}/weather/${location}`
        );

        const data = response.data;

        return {
            location: data.location,
            temperature: data.temperature,
            windSpeed: data.windSpeed,
            humedity: data.humedity,
            description: data.description,
            status: data.status,
        };
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return null;
        } else {
            throw error;
        }
    }
};

export default getWeatherData;
