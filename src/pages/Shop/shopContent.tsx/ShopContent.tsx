import { ButtonCheckbox } from "../../../components/buttonCheckBox/ButtonCheckBox";
import { BookCard } from "../bookCard/BookCard";
import filterIcon from "../../../assets/icons/filter-icon.svg";
import "./ShopContent.modules.css";

export function ShopContent() {
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
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />

                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </div>
    );
}
