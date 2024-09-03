import "./OurBestPicks.modules.css";
import book from "../../../assets/book.jpg";

export function OurBestPicks() {
    return (
        <div className="OurBestPicksContainer">
            <h2>Our Best Picks</h2>

            <div className="bestBooks">
                <div>
                    <img src={book} />
                    <span>
                        <p>Economia aplicada</p>
                        <p>Antonio Carlos </p>
                    </span>
                </div>

                <div>
                    <img src={book} />
                    <span>
                        <p>Economia aplicada fdsfds</p>
                        <p>Antonio Carlos</p>
                    </span>
                </div>

                <div>
                    <img src={book} />
                    <span>
                        <p>Economia aplicada</p>
                        <p>Antonio Carlos </p>
                    </span>
                </div>

                <div>
                    <img src={book} />
                    <span>
                        <p>Economia aplicada</p>
                        <p>Antonio Carlos </p>
                    </span>
                </div>
            </div>

            <div className="paginationDots">
                <button className="active"></button>
                <button></button>
                <button></button>
            </div>
        </div>
    );
}
