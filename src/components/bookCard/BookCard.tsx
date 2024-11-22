import "./BookCard.modules.css";
import { AddToCartButton } from "../addToCartButton/AddToCartButton";
import { useCart } from "../../hooks/UseCart";
import { formatToBRL } from "../../util/currencyFormatter";
import { useNavigate } from "react-router-dom";

export interface IBookCard {
    id: number;
    title: string;
    author: string;
    price: number;
    image: string;
}

export function BookCard({ id, title, author, price, image }: IBookCard) {
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

            <AddToCartButton
                buttonName="Add to Cart"
                onClick={() => addToCart({ id, title, author, price, image })}
            />
        </div>
    );
}
