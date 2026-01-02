import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
    onSearch: (location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [location, setLocation] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching...");
        onSearch(location);
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                className="input"
                required
            />
            <button type="submit" className="search">
                <FontAwesomeIcon icon={faSearch} size="1x" />
            </button>
        </form>
    );
};

export default SearchBar;
