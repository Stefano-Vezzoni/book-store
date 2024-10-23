import { ButtonCheckbox } from "../../../components/buttonCheckBox/ButtonCheckBox";
import { BookCard } from "../bookCard/BookCard";
import filterIcon from "../../../assets/icons/filter-icon.svg";
import "./ShopContent.modules.css";
import { useQuery } from "@tanstack/react-query";
import { IBook, fetchBooks } from "../../../api/fetchBooks";

export function ShopContent() {
    const { data } = useQuery<IBook[]>({
        queryKey: ["books"],
        queryFn: fetchBooks,
    });

    return (
        <div className="shopContentContainer">
            <h1>Explore All Books Here</h1>

            <div className="filterContainer">
                <ButtonCheckbox label="All" />
                <ButtonCheckbox label="Novel" />
                <ButtonCheckbox label="Translations" />
                <ButtonCheckbox label="Kids' Stories" />
                <button className="shopContainerCustomFilter">
                    <img src={filterIcon} />
                    Filter
                </button>
            </div>

            <div className="bookListContainer">
                {data?.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        price={book.price}
                        image={book.image}
                    />
                ))}
            </div>
        </div>
    );
}
