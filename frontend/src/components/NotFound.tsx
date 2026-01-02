export const NotFound = () => {
    return (
        <div className="weather-card split-card">
            <div className="split-text">
                <h1 className="location">Sorry...</h1>
                <h4>404 Not Found</h4>
            </div>

            <div>
                <img src="rain.svg" alt="rain.svg" />
            </div>
        </div>
    );
};
