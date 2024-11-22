import { ButtonCheckbox } from "../../../components/buttonCheckBox/ButtonCheckBox";
import { BookCard } from "../../../components/bookCard/BookCard";
import filterIcon from "../../../assets/icons/filter-icon.svg";
import nextPageIcon from "../../../assets/icons/next-page-icon.svg";
import previousPageIcon from "../../../assets/icons/previous-page-icon.svg";
import "./ShopContent.modules.css";
import { useState } from "react";
import { FilterModal } from "../filterModal/FilterModal";
import { useBooks, useFilteredBooks, usePaginatedBooks } from "../../../hooks/useBooks";

export function ShopContent() {
    const { data } = useBooks();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    const filteredBooks = useFilteredBooks(selectedCategories);
    const { paginatedBooks, totalPages } = usePaginatedBooks(filteredBooks, page, itemsPerPage);

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

    function handleNextPage() {
        const nextPage = page + 1;

        if (data && nextPage <= totalPages) {
            setPage(nextPage);
            window.scrollTo(0, 0);
        }
    }

    function handlePreviousPage() {
        const prevPage = page - 1;

        if (prevPage >= 1) {
            setPage(prevPage);
            window.scrollTo(0, 0);
        }
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <div className="shopContentContainer">
            <h1>Explore All Books Here</h1>

            <div className="filterContainer">
                {["Beginner", "Intermediate", "Advanced"].map((difficulty) => (
                    <ButtonCheckbox
                        key={difficulty}
                        label={difficulty}
                        onToggle={handleCategoriesFilter}
                        checked={selectedCategories.includes(difficulty.toLowerCase())}
                    />
                ))}

                <button className="shopContainerCustomFilter" onClick={openModal}>
                    <img src={filterIcon} />
                    Filter
                </button>

                <FilterModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    handleCategoriesFilter={handleCategoriesFilter}
                    selectedCategories={selectedCategories}
                />
            </div>

            <div className="bookListContainer">
                {paginatedBooks?.map((book) => (
                    <BookCard
                        id={book.id}
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        price={book.price}
                        image={book.image}
                    />
                ))}
            </div>

            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={page === 1}>
                    <img src={previousPageIcon} />
                </button>

                <span>
                    Page {page} of {totalPages}
                </span>

                <button onClick={handleNextPage} disabled={page === totalPages}>
                    <img src={nextPageIcon} />
                </button>
            </div>
        </div>
    );
}
