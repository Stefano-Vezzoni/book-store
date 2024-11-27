import { useNavigate } from "react-router-dom";
import "./FavoriteItem.modules.css";
import { ToggleFavBookButton } from "../../../components/toggleFavBookButton/ToggleFavBookButton";
import { IBook } from "../../../api/fetchBooks";

interface IFavoriteItem {
    book: IBook;
}

export function FavoriteItem({ book }: IFavoriteItem) {
    const navigate = useNavigate();

    return (
        <div className="favoriteItemContainer">
            <img src={book.image} onClick={() => navigate(`/bookpage/${book.id}`)} />

            <div className="favoriteItemTitleContainer">
                <p>{book.title}</p>
                <p>
                    <strong>Author: </strong>
                    {book.author}
                </p>
            </div>

            <div>
                <p>
                    <strong>Summary: </strong>
                    {book.synopsis}
                </p>
            </div>

            <ToggleFavBookButton book={book} />
        </div>
    );
}
