import { IBook } from "../../../api/fetchBooks";
import "./BestPicksCard.modules.css";

interface IBestPicksCard {
    book: IBook;
}

export function BestPicksCard({ book }: IBestPicksCard) {
    const { image, title, author } = book;

    return (
        <div className="bestPicksCardContainer">
            <img src={image} />

            <div className="bestPicksCardTitlesContainer">
                <p>{title}</p>
                <p>{author} </p>
            </div>
        </div>
    );
}
