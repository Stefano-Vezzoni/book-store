import { createContext, useEffect, useState } from "react";
import { IBook } from "../api/fetchBooks";

interface IFavBookProps {
    favBooks: IBook[];
    toggleFavBook: (book: IBook) => void;
}

function getInitialFavBooks(): IBook[] {
    const storedBook = localStorage.getItem("favBooks");
    return storedBook ? JSON.parse(storedBook) : [];
}

export const FavBooksContext = createContext<IFavBookProps | undefined>(undefined);

export function FavBooksProvider({ children }: { children: React.ReactNode }) {
    const [favBooks, setFavBooks] = useState<IBook[]>(getInitialFavBooks);

    useEffect(() => {
        localStorage.setItem("favBooks", JSON.stringify(favBooks));
        console.log("Added to favbooks");
    }, [favBooks]);

    function toggleFavBook(book: IBook) {
        if (book) {
            setFavBooks((prevBooks) => {
                const isFavorite = prevBooks.some((favBook) => favBook.id === book?.id);

                if (isFavorite) {
                    return prevBooks.filter((favBook) => favBook.id !== book?.id);
                }

                return [...prevBooks, book];
            });
        }
    }

    return (
        <FavBooksContext.Provider value={{ favBooks, toggleFavBook }}>
            {children}
        </FavBooksContext.Provider>
    );
}
