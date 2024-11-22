import "./CartItem.modules.css";
import bookExample from "../../../assets/bookExample.svg";
import { CopiesButton } from "../copiesButton/CopiesButton";
import { IBookCard } from "../../../components/bookCard/BookCard";
import { formatToBRL } from "../../../util/currencyFormatter";
import { useCart } from "../../../hooks/UseCart";
import xIcon from "../../../assets/icons/x-icon.svg";

export function CartItem({ id, title, author, price }: IBookCard) {
    const { removeFromCart } = useCart();

    return (
        <div className="cartItemContainer">
            <img src={bookExample} />

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
