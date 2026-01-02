from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from core.exception_handler import api_exception_handler
from core.errors import APIExceptionError
from routers.get_weather import router as weather_router

app = FastAPI(
    title="Weather API",
    version="1.0.0"
)

default_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://weather-app-lac-six-82.vercel.app"
]

env_origins = os.environ.get("FRONTEND_ORIGINS")
if env_origins:
    extra = [o.strip() for o in env_origins.split(",") if o.strip()]
    origins = list(dict.fromkeys(default_origins + extra))
else:
    origins = default_origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(weather_router, prefix="/weather", tags=["weather"])

@app.get("/")
def root():
    return {"message": "welcome to Weather API"}

app.add_exception_handler(APIExceptionError, api_exception_handler)
