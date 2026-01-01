from models.weather import Weather
from dotenv import load_dotenv
from core.errors import APIExceptionError
import requests
import os

load_dotenv()

def get_api_weather(city: str) -> Weather:
    API_KEY = os.environ.get('API_KEY')
    if not API_KEY:
        raise APIExceptionError(service="OpenWeatherMap", details="API_KEY not configured", status_code=500, code="config_error")

    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

    try:
        response = requests.get(url, timeout=10)
    except requests.RequestException as e:
        raise APIExceptionError(service="OpenWeatherMap", details=str(e), status_code=502, code="upstream_error")

    if response.status_code == 200:
        data = response.json()
        return Weather(
            location=data.get('name'),
            temperature=data.get('main', {}).get('temp'),
            windSpeed=data.get('wind', {}).get('speed', 0.0),
            humedity=data.get('main', {}).get('humidity', 0),
            description=data.get('weather', [{}])[0].get('description', ''),
            status=data.get('weather', [{}])[0].get('main', '')
        )
    else:
        raise APIExceptionError(
            service="OpenWeatherMap",
            details=f"Failed to fetch weather data for {city}. Status code: {response.status_code}",
            status_code=response.status_code,
            code="upstream_non_200"
        )