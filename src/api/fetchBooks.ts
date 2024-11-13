export interface IBook {
    id: number;
    title: string;
    author: string;
    synopsis: string;
    price: number;
    image: string;
    categories: string[];
    difficulty: string;
}

export async function fetchBooks(): Promise<IBook[]> {
    const response = await fetch("http://localhost:5000/books");

    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }

    const data = await response.json();
    return data;
}
