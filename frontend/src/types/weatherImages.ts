export const getWeatherImage = (description: string): string => {
    return weatherImageMap[description.toLowerCase()] || "icon.svg";
};

const weatherImageMap: { [key: string]: string } = {
    "clear sky": "soleado.svg",
    "few clouds": "cloud.svg",
    "scattered clouds": "cloud.svg",
    "broken clouds": "cloud.svg",
    "overcast clouds": "./public/cloud.svg",
    "light rain": "ligth-rain.svg",
    "moderate rain": "ligth-rain.svg",
    "heavy intensity rain": "rain.svg",
    "light snow": "snow.svg",

    snow: "snow.svg",
    "heavy snow": "snow.svg",
    mist: "cloud.svg",
    fog: "cloud.svg",
    thunderstorm: "ligth-rain.svg",
    "light shower rain": "ligth-rain.svg",
    "shower rain": "ligth-rain.svg",
};
