from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.exception_handler import api_exception_handler
from core.errors import APIExceptionError
from routers.get_weather import router as weather_router

app = FastAPI(
    title="Weather API",
    version="1.0.0"
)

# Allow frontend dev server to access this API
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(weather_router, prefix="/weather", tags=["weather"])

@app.get('/')
def root():
    return {
        'message': 'welcome to Weather API'
    }

app.add_exception_handler(APIExceptionError, api_exception_handler)