import "./AddToCartButton.modules.css";
import shoppingCartIcon from "../../assets/icons/shopping-cart-icon.svg";

interface IAddToCartButton {
    buttonName: string;
    onClick: () => void;
}

export function AddToCartButton({ buttonName, onClick }: IAddToCartButton) {
    return (
        <button className="addToCartButtonContainer" onClick={onClick}>
            <img src={shoppingCartIcon} alt="" />
            {buttonName}
        </button>
    );
}
