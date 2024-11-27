import { useState } from "react";
import { fetchBooks, IBook } from "../../../api/fetchBooks";
import "./OurBestPicks.modules.css";
import { useQuery } from "@tanstack/react-query";

export function OurBestPicks() {
    const { data } = useQuery<IBook[]>({
        queryKey: ["books"],
        queryFn: fetchBooks,
    });

    const [currentPage, setCurrentPage] = useState(1);

    function handlePageChange(page: number) {
        setCurrentPage(page);
    }

    function booksByPage() {
        const index = currentPage * 4;
        const result = data?.slice(index - 4, index);

        return result;
    }

    return (
        <div className="ourBestPicksContainer">
            <h2>Our Best Picks </h2>

            <div className="bestBooks">
                {booksByPage()?.map((book) => (
                    <div key={book.id}>
                        <img src={book.image} />
                        <span>
                            <p>{book.title}</p>
                            <p>{book.author} </p>
                        </span>
                    </div>
                ))}
            </div>

            <div className="paginationDots">
                <button
                    className={currentPage === 1 ? "active" : ""}
                    onClick={() => handlePageChange(1)}
                />

                <button
                    className={currentPage === 2 ? "active" : ""}
                    onClick={() => handlePageChange(2)}
                />

                <button
                    className={currentPage === 3 ? "active" : ""}
                    onClick={() => handlePageChange(3)}
                />
            </div>
        </div>
    );
}
