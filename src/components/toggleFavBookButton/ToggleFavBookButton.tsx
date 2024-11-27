import { IBook } from "../../api/fetchBooks";
import { FavoriteBookIcon } from "../../assets/icons/favoriteBookIcon";
import { useFavBooks } from "../../hooks/useFavBooks";
import "./ToggleFavBookButton.modules.css";

interface IToggleFavBookButton {
    book: IBook;
}

export function ToggleFavBookButton({ book }: IToggleFavBookButton) {
    const { toggleFavBook } = useFavBooks();

    return (
        <button className="toggleFavBookContainer" onClick={() => toggleFavBook(book)}>
            <FavoriteBookIcon />
        </button>
    );
}
