import "./BookCard.modules.css";
import { AddToCartButton } from "../addToCartButton/AddToCartButton";
import { useCart } from "../../hooks/useCart";
import { formatToBRL } from "../../util/currencyFormatter";
import { useNavigate } from "react-router-dom";
import { IBook } from "../../api/fetchBooks";

interface IBookCard {
    book: IBook;
}

export function BookCard({ book }: IBookCard) {
    const { id, image, title, author, price } = book;
    const { addToCart } = useCart();
    const navigate = useNavigate();

    return (
        <div className="bookCardContainer">
            <img src={image} onClick={() => navigate(`/bookpage/${id}`)} />

            <div className="bookCardTitleContainer">
                <p>{title}</p>
                <p>{author}</p>
            </div>

            <div className="bookCardPriceContainer">
                <p>{formatToBRL(price)}</p>
                <p>Available across all branches</p>
            </div>

            <AddToCartButton buttonName="Add to Cart" onClick={() => addToCart(book)} />
        </div>
    );
}
