
class APIExceptionError(Exception):

    def __init__(self, service: str, details: str, status_code: int = 502, code: str = "api_error"):
        self.service = service
        self.details = details
        self.status_code = status_code
        self.detail = details
        self.code = code

