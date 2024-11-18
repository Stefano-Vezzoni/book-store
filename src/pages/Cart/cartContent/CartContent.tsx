import "./CartContent.modules.css";
import { EmptyCartContent } from "../emptyCartContent/EmptyCartContent";
import { useCart } from "../../../hooks/UseCart";
import { CartItem } from "../cartItem/CartItem";

//Refazer a porra do cartcontext inteiro usando a tipagem correta dessa vez.
//Refazer a porra do cartcontext inteiro usando a tipagem correta dessa vez.
//Refazer a porra do cartcontext inteiro usando a tipagem correta dessa vez.
//Refazer a porra do cartcontext inteiro usando a tipagem correta dessa vez.

export function CartContent() {
    const { cart } = useCart();

    const isCartEmpty = false;

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
                <p>Total Price: R$700,00</p>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    );
}
