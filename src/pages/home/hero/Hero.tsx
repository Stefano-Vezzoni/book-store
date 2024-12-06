import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.modules.css";

export function Hero() {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    function handleSearch() {
        navigate(`/shop?search=${encodeURIComponent(searchValue)}`);
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="heroContainer">
            <div className="heroContent">
                <h1>The Book Lover's Dreamland Awaits!</h1>
                <h3>
                    Welcome to the ultimate book lover's paradise! Join our community and contribute
                    to the ever-evolving library of stories, where every book has a chance to
                    inspire someone new.
                </h3>

                <div className="searchButtonContainer">
                    <input
                        type="search"
                        placeholder="Search  a Book"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    );
}
