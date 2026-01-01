from pydantic import BaseModel, Field


class Weather(BaseModel):
    location: str
    temperature: float = Field(ge=-100, le=100)
    windSpeed: float
    humedity: int
    description: str
    status: str