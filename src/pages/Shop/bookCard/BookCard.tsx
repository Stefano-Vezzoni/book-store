import "./BookCard.modules.css";
import bookExample from "../../../assets/bookExample.svg";
import { AddToCartButton } from "../../../components/addToCartButton/AddToCartButton";

export function BookCard() {
    return (
        <div className="bookCardContainer">
            <img src={bookExample} />

            <div className="bookCardTitleContainer">
                <p>Thunmanhandiya</p>
                <p>Mahagamasekara</p>
            </div>

            <div className="bookCardPriceContainer">
                <p>R$ 50,00</p>
                <p>Available across all branches</p>
            </div>

            <AddToCartButton />
        </div>
    );
}
