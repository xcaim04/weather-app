from fastapi import APIRouter, Depends
from models.weather import Weather
from services.api_weather import get_api_weather

router = APIRouter()


@router.get('/{city}')
def get_weather(weather: Weather = Depends(get_api_weather)):
    return weather