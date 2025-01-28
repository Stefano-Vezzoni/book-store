import "./AddToCartButton.modules.css";
import shoppingCartIcon from "../../assets/icons/shopping-cart-icon.svg";
import { toast } from "react-toastify";

interface IAddToCartButton {
    buttonName: string;
    onClick: () => void;
}

export function AddToCartButton({ buttonName, onClick }: IAddToCartButton) {
    function handleClick() {
        toast.success("Book added to the cart!");
        if (onClick) onClick();
    }

    return (
        <button className="addToCartButtonContainer" onClick={handleClick}>
            <img src={shoppingCartIcon} alt="" />
            {buttonName}
        </button>
    );
}
