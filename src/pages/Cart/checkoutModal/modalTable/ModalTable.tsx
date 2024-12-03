import { useCart } from "../../../../hooks/useCart";
import "./ModalTable.modules.css";

export function ModalTable() {
    const { cart } = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <table className="checkoutTableContainer">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((cartItem) => (
                    <tr key={cartItem.id}>
                        <td>
                            {cartItem.title} (x{cartItem.quantity})
                        </td>
                        <td className="checkoutPriceElements">
                            ${(cartItem.price * cartItem.quantity).toFixed(2)}
                        </td>
                    </tr>
                ))}
                <tr className="checkoutTableTotalContainer">
                    <td>Total</td>
                    <td className="checkoutPriceElements">${totalPrice.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    );
}
