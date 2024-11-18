import "./CartItem.modules.css";
import bookExample from "../../../assets/bookExample.svg";
import { CopiesButton } from "../copiesButton/CopiesButton";
import { IBookCard } from "../../Shop/bookCard/BookCard";
import { formatToBRL } from "../../../util/currencyFormatter";

export function CartItem({ id, title, author, price }: IBookCard) {
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

            <button>Remove</button>
        </div>
    );
}
