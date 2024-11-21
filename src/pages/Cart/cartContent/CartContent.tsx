import "./CartContent.modules.css";
import { EmptyCartContent } from "../emptyCartContent/EmptyCartContent";
import { useCart } from "../../../hooks/UseCart";
import { CartItem } from "../cartItem/CartItem";
import { formatToBRL } from "../../../util/currencyFormatter";

export function CartContent() {
    const { cart } = useCart();

    const isCartEmpty = false;

    function getTotalPrice() {
        return cart.reduce((total, book) => total + book.price * (book.quantity || 1), 0);
    }

    return (
        <div className="CartContentContainer">
            <h1>Your Cart Details</h1>

            {isCartEmpty ? (
                <EmptyCartContent />
            ) : (
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
            )}

            <div className="checkoutContainer">
                <p>Total Price: {formatToBRL(getTotalPrice())}</p>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    );
}
