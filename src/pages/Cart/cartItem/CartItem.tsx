import "./CartItem.modules.css";
import bookExample from "../../../assets/bookExample.svg";
import { CopiesButton } from "../copiesButton/CopiesButton";

export function CartItem() {
    return (
        <div className="cartItemContainer">
            <img src={bookExample} />

            <div className="cartItemTitles">
                <p>Thunmanhandiya</p>
                <p>Mahagamasekara</p>
            </div>

            <div className="cartItemPrice">
                <p>R$ 50,00</p>
            </div>

            <div className="cartItemCopiesButton">
                <CopiesButton />
            </div>
        </div>
    );
}
