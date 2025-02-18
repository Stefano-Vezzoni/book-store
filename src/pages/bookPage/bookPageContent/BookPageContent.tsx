import "./BookPageContent.modules.css";
import { CategorieButton } from "../../../components/categorieButton/CategorieButton";
import { useParams } from "react-router-dom";
import { useBookById } from "../../../hooks/useBooks";

export function BookPageContent() {
    const { id } = useParams();
    const currentBook = useBookById(id);

    if (!currentBook) return <p>Book not found</p>;

    function normalizeImagePath(path: string): string {
        return path.startsWith("./") ? path.slice(1) : path;
    }

    return (
        <div className="bookPageContentContainer">
            <div className="bookPageContentTitleContainer">
                <p>{currentBook.title}</p>
                <p>{currentBook.author}</p>
            </div>

            <img src={normalizeImagePath(currentBook.image)} />

            <div className="bookPageContentCategorieContainer">
                {currentBook.categories.map((categorie) => {
                    return <CategorieButton key={categorie} name={categorie} />;
                })}
            </div>

            <div className="bookPageContentAuthor">
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

            <div className="bookPageContentSinopse">
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
