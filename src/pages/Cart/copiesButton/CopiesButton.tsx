import "./CopiesButton.modules.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useCart } from "../../../hooks/useCart";

interface ICopiesButton {
    bookId: number;
}

export function CopiesButton({ bookId }: ICopiesButton) {
    const { cart, increaseQuantity, decreaseQuantity } = useCart();

    const bookInCart = cart.find((item) => item.id === bookId);
    const quantity = bookInCart ? bookInCart.quantity : 0;

    return (
        <div className="copiesButtonContainer">
            <p>Copies</p>

            <div className="counterContainer">
                <button onClick={() => decreaseQuantity(bookId)}>
                    <Icon icon="ic:round-minus" />
                </button>

                <p>{quantity}</p>

                <button onClick={() => increaseQuantity(bookId)}>
                    <Icon icon="ic:baseline-plus" />
                </button>
            </div>
        </div>
    );
}
