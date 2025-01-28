import { BookCard } from "../../../components/bookCard/BookCard";
import filterIcon from "../../../assets/icons/filter-icon.svg";
import nextPageIcon from "../../../assets/icons/next-page-icon.svg";
import previousPageIcon from "../../../assets/icons/previous-page-icon.svg";
import "./ShopContent.modules.css";
import { useState } from "react";
import { FilterModal } from "../filterModal/FilterModal";
import { useBooks, useFilteredBooks, usePaginatedBooks } from "../../../hooks/useBooks";
import { ToggleFavBookButton } from "../../../components/toggleFavBookButton/ToggleFavBookButton";
import { IBook } from "../../../api/fetchBooks";
import { useSearchParams } from "react-router-dom";

export function ShopContent() {
    const { data } = useBooks();
    const [searchParams] = useSearchParams();
    const initialSearch = searchParams.get("search") || "";
    const [searchValue, setSearchValue] = useState(initialSearch);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    const filteredBooks = useFilteredBooks(selectedCategories);
    const booksByTitle = filterBooksByTitle(filteredBooks, searchValue);
    const { paginatedBooks, totalPages } = usePaginatedBooks(booksByTitle, page, itemsPerPage);

    function handleCategoriesFilter(label: string, checked: boolean) {
        const lowercasedLabel = label.toLowerCase();

        setSelectedCategories((prevFilters) =>
            checked
                ? [...prevFilters, lowercasedLabel]
                : prevFilters.filter((filter) => filter !== lowercasedLabel),
        );

        //If any filter change, go to page 1
        setPage(1);
    }

    function handlePageChange(direction: "next" | "previous") {
        const newPage = direction === "next" ? page + 1 : page - 1;

        if (data && newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
            window.scrollTo(0, 0);
        }
    }

    function filterBooksByTitle(books: IBook[], term: string) {
        return books.filter((book) => book.title.toLowerCase().includes(term.toLowerCase()));
    }

    return (
        <div className="shopContentContainer">
            <h1>Explore All Books Here</h1>

            <div className="filterContainer">
                <div className="shopContentSearchContainer">
                    <input
                        type="search"
                        placeholder="Search a Book"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <button
                        className="shopContainerCustomFilter"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                        <img src={filterIcon} />
                        Filters
                    </button>
                </div>

                <FilterModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(!isModalOpen)}
                    handleCategoriesFilter={handleCategoriesFilter}
                    selectedCategories={selectedCategories}
                />
            </div>

            <div className="bookListContainer">
                {paginatedBooks?.map((book) => (
                    <div className="bookPlusToggleFav" key={book.id}>
                        <BookCard book={book} />

                        <ToggleFavBookButton book={book} />
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button onClick={() => handlePageChange("previous")} disabled={page === 1}>
                    <img src={previousPageIcon} />
                </button>

                <span>
                    Page {page} of {totalPages}
                </span>

                <button onClick={() => handlePageChange("next")} disabled={page === totalPages}>
                    <img src={nextPageIcon} />
                </button>
            </div>
        </div>
    );
}
