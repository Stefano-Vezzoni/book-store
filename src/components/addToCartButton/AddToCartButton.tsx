import "./AddToCartButton.modules.css";
import shoppingCartIcon from "../../assets/icons/shopping-cart-icon.svg";

export function AddToCartButton() {
    return (
        <button className="addToCartButtonContainer">
            <img src={shoppingCartIcon} alt="" />
            Add to Cart
        </button>
    );
}
