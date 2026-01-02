import axios from "axios";
import { weatherData } from "../types/weatherData";


const getWeatherData = async (
    location: string
): Promise<weatherData | null> => {
    try {
        const baseUrl = (import.meta as any).env?.VITE_API_URL || "http://127.0.0.1:8000";
        const url = `${baseUrl.replace(/\/$/, "")}/weather/${encodeURIComponent(location)}`;
        const response = await axios.get(url);

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
