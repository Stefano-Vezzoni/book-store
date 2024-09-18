import "./CartContent.modules.css";
import { CartItem } from "../cartItem/CartItem";
import { EmptyCartContent } from "../emptyCartContent/EmptyCartContent";

export function CartContent() {
    const isCartEmpty = false;

    return (
        <div className="CartContentContainer">
            <h1>Your Cart Details</h1>

            {isCartEmpty ? (
                <EmptyCartContent />
            ) : (
                <div className="cartItemsContainer">
                    <CartItem />
                </div>
            )}

            <div className="checkoutContainer">
                <p>Total Price: R$700,00</p>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    );
}
