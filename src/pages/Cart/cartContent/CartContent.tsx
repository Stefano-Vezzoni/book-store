import "./CartContent.modules.css";
import { useCart } from "../../../hooks/useCart";
import { CartItem } from "../cartItem/CartItem";
import { formatToBRL } from "../../../util/currencyFormatter";
import { EmptyGenericContent } from "../../../components/emptyGenericContent/EmptyGenericContent";

export function CartContent() {
    const { cart } = useCart();

    function getTotalPrice() {
        return cart.reduce((total, book) => total + book.price * (book.quantity || 1), 0);
    }

    return (
        <div className="cartContentContainer">
            <h1>Your Cart Details</h1>

            {cart.length === 0 ? (
                <EmptyGenericContent name="cart" />
            ) : (
                <>
                    <div className="cartItemsContainer">
                        {cart.map((book) => (
                            <CartItem
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                price={book.price}
                                image={book.image}
                            />
                        ))}
                    </div>

                    <div className="checkoutContainer">
                        <p>Total Price: {formatToBRL(getTotalPrice())}</p>
                        <button>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}
