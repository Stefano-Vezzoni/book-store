import "./FavoriteReads.modules.css";
import bookStand from "../../../assets/book-stand.svg";
import { useNavigate } from "react-router-dom";

export function FavoriteReads() {
    const navigate = useNavigate();

    function goToShop() {
        navigate("/shop");
    }
    return (
        <div className="favoriteReadsContainer">
            <div>
                <img src={bookStand} />
            </div>

            <div className="favoriteContentContainer">
                <p>Your favourite Reads</p>
                <p className="HighlightedText">Are Here!</p>
                <p>
                    Buy your favorite books online with ease! Enjoy exclusive offers and discounts
                    on selected titles. Dive into our collection and find special deals that make
                    reading more affordable. Shop now and unlock more savings with every purchase!
                </p>

                <div className="statisticsContainer">
                    <span>
                        <p>800+</p>
                        <p>Book Listing</p>
                    </span>

                    <span>
                        <p>1K+</p>
                        <p>Registered Members</p>
                    </span>

                    <span>
                        <p>50+</p>
                        <p>Branch Count</p>
                    </span>
                </div>

                <div>
                    <button className="exploreButton" onClick={goToShop}>
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
}
