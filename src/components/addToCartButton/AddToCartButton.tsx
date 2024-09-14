import "./AddToCartButton.modules.css";
import shoppingCartIcon from "../../assets/icons/shopping-cart-icon.svg";

interface IAddToCartButton {
    buttonName: string;
}

export function AddToCartButton({ buttonName }: IAddToCartButton) {
    return (
        <button className="addToCartButtonContainer">
            <img src={shoppingCartIcon} alt="" />
            {buttonName}
        </button>
    );
}
