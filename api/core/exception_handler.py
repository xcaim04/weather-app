from .errors import APIExceptionError
from fastapi.responses import JSONResponse
from fastapi import Request

async def api_exception_handler(request: Request, exc: APIExceptionError) -> JSONResponse:
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "detail": exc.detail,
            "code": exc.code,
        },
    )