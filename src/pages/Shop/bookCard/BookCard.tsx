import "./BookCard.modules.css";
import { AddToCartButton } from "../../../components/addToCartButton/AddToCartButton";

interface IBookCard {
    title: string;
    author: string;
    price: number;
    image: string;
}

export function BookCard({ title, author, price, image }: IBookCard) {
    return (
        <div className="bookCardContainer">
            <img src={image} />

            <div className="bookCardTitleContainer">
                <p>{title}</p>
                <p>{author}</p>
            </div>

            <div className="bookCardPriceContainer">
                <p>R$ {price},00</p>
                <p>Available across all branches</p>
            </div>

            <AddToCartButton buttonName="Add to Cart" />
        </div>
    );
}
