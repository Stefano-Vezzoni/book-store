import "./CartContent.modules.css";
import { useCart } from "../../../hooks/useCart";
import { CartItem } from "../cartItem/CartItem";
import { formatToBRL } from "../../../util/currencyFormatter";
import { EmptyGenericContent } from "../../../components/emptyGenericContent/EmptyGenericContent";
import { useState } from "react";
import { CheckoutModal } from "../checkoutModal/CheckoutModal";

export function CartContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                                synopsis={book.synopsis}
                                categories={book.categories}
                            />
                        ))}
                    </div>

                    <div className="cartContentCheckoutContainer">
                        <p>Total Price: {formatToBRL(getTotalPrice())}</p>
                        <button onClick={() => setIsModalOpen(!isModalOpen)}>
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}

            {isModalOpen && (
                <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)} />
            )}
        </div>
    );
}
