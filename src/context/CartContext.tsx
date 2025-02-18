import { createContext, useEffect, useState } from "react";
import { IBook } from "../api/fetchBooks";

interface ICartItem extends IBook {
    quantity: number;
}

interface CartContextProps {
    cart: ICartItem[];
    addToCart: (book: IBook) => void;
    increaseQuantity: (bookId: number) => void;
    decreaseQuantity: (bookId: number) => void;
    removeFromCart: (bookId: number) => void;
}

function getInitialCart(): ICartItem[] {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<ICartItem[]>(getInitialCart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(book: IBook) {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === book.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item,
                );
            }
            console.log(cart);

            return [...prevCart, { ...book, quantity: 1 }];
        });
    }

    function increaseQuantity(bookId: number) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item,
            ),
        );
    }

    function decreaseQuantity(bookId: number) {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === bookId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            ),
        );
    }

    function removeFromCart(bookId: number) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
    }

    return (
        <CartContext.Provider
            value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
}
