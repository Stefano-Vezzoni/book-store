import "./Hero.modules.css";

export function Hero() {
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
                    <input type="search" placeholder="Search  a Book" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
}
