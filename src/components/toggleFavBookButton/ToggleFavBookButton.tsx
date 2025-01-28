import { toast } from "react-toastify";
import { IBook } from "../../api/fetchBooks";
import { FavoriteBookIcon } from "../../assets/icons/favoriteBookIcon";
import { useFavBooks } from "../../hooks/useFavBooks";
import "./ToggleFavBookButton.modules.css";

interface IToggleFavBookButton {
    book: IBook;
}

export function ToggleFavBookButton({ book }: IToggleFavBookButton) {
    const { toggleFavBook } = useFavBooks();

    function handleClick() {
        toast.success("Book added to the cart!");
        toggleFavBook(book);
    }

    return (
        <button className="toggleFavBookContainer" onClick={handleClick}>
            <FavoriteBookIcon />
        </button>
    );
}
