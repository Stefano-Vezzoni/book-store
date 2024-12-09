import "./CartItem.modules.css";
import { CopiesButton } from "../copiesButton/CopiesButton";
import { formatToBRL } from "../../../util/currencyFormatter";
import { useCart } from "../../../hooks/useCart";
import xIcon from "../../../assets/icons/x-icon.svg";
import { IBook } from "../../../api/fetchBooks";

export function CartItem(book: IBook) {
    const { id, title, author, price, image } = book;
    const { removeFromCart } = useCart();
    console.log(image);

    return (
        <div className="cartItemContainer">
            <img src={image} />

            <div className="cartItemTitles">
                <p>{title}</p>
                <p>{author}</p>
            </div>

            <div className="cartItemPrice">
                <p>{formatToBRL(price)}</p>
            </div>

            <div className="cartItemCopiesButton">
                <CopiesButton bookId={id} />
            </div>

            <button className="removeButton" onClick={() => removeFromCart(id)}>
                <img src={xIcon} />
            </button>
        </div>
    );
}
