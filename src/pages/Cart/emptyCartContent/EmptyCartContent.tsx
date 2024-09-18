import "./EmptyCartContent.modules.css";
import emptyCart from "../../../assets/empty-cart.svg";

export function EmptyCartContent() {
    return (
        <div className="emptyCartContainer">
            <img src={emptyCart} />

            <div>
                <h2>Your cart is empty</h2>
                <p>But don't worry, there are plenty of great items waiting for you!</p>
            </div>
        </div>
    );
}
