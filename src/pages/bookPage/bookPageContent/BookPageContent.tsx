import "./BookPageContent.modules.css";
import { CategorieButton } from "../../../components/categorieButton/CategorieButton";
import { useParams } from "react-router-dom";
import bookExample from "../../../assets/bookExample.svg";
import { useBookById } from "../../../hooks/useBooks";

export function BookPageContent() {
    const { id } = useParams();
    const currentBook = useBookById(id);

    if (!currentBook) return <p>Book not found</p>;

    return (
        <div className="BookPageContentContainer">
            <div className="BookPageContentTitleContainer">
                <p>{currentBook.title}</p>
                <p>{currentBook.author}</p>
            </div>

            <img src={bookExample} />

            <div className="BookPageContentCategorieContainer">
                {currentBook.categories.map((categorie) => {
                    return <CategorieButton key={categorie} name={categorie} />;
                })}
            </div>

            <div className="BookPageContentAuthor">
                <h2>Author: {currentBook.author}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur,
                    veniam esse ratione in voluptatibus alias numquam adipisci temporibus expedita
                    quod dolore vel sapiente dolor itaque, possimus minima illum! Unde. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur, veniam esse
                    ratione in voluptatibus alias numquam adipisci temporibus expedita quod dolore
                    vel sapiente dolor itaque, possimus minima illum! Unde.
                </p>
            </div>

            <div className="BookPageContentSinopse">
                <h2>Sinopse</h2>
                <p>
                    {currentBook.synopsis} Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum tenetur, veniam esse ratione in voluptatibus alias numquam adipisci
                    temporibus expedita quod dolore vel sapiente dolor itaque, possimus minima
                    illum! Unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum tenetur, veniam esse ratione in voluptatibus alias numquam adipisci
                    temporibus expedita quod dolore vel sapiente dolor itaque, possimus minima
                    illum! Unde.
                </p>
            </div>
        </div>
    );
}
