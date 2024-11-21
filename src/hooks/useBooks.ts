import { useQuery } from "@tanstack/react-query";
import { IBook, fetchBooks } from "../api/fetchBooks";

export function useBooks() {
    return useQuery<IBook[]>({
        queryKey: ["books"],
        queryFn: fetchBooks,
        staleTime: 1000 * 60 * 60, // Cache por 60 minutos
    });
}

export function useBookById(id?: string | number) {
    const { data } = useBooks();
    return data?.find((book) => book.id.toString() === id?.toString());
}

export function usePaginatedBooks(filteredBooks: IBook[], page: number, itemsPerPage: number) {
    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

    const paginatedBooks = filteredBooks.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return { paginatedBooks, totalPages };
}

export function useFilteredBooks(selectedCategories: string[]) {
    const { data } = useBooks();

    const filteredBooks =
        data?.filter(
            (book) =>
                selectedCategories.length === 0 ||
                book.categories.some((category) =>
                    selectedCategories.includes(category.toLowerCase()),
                ),
        ) || [];

    return filteredBooks;
}
