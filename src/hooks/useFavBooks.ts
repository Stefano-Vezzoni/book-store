import { useContext } from "react";
import { FavBooksContext } from "../context/FavBooksContext";

export function useFavBooks() {
    const context = useContext(FavBooksContext);
    if (!context) throw new Error("useFavBooks must be used within a FavBooksProvider");
    return context;
}
