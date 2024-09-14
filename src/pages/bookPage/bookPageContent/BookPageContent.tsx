import "./BookPageContent.modules.css";
import bookExample from "../../../assets/bookExample.svg";
import { CategorieButton } from "../../../components/categorieButton/CategorieButton";

export function BookPageContent() {
    return (
        <div className="BookPageContentContainer">
            <div className="BookPageContentTitleContainer">
                <p>Economia: modo de usar</p>
                <p>Ha-Joon Chang</p>
            </div>

            <img src={bookExample} />

            <div className="BookPageContentCategorieContainer">
                <CategorieButton name="Business & Economics" />
                <CategorieButton name="Entrepreneurship" />
                <CategorieButton name="Entrepreneurship" />
                <CategorieButton name="Entrepreneurship" />
                <CategorieButton name="Entrepreneurship" />
            </div>

            <div className="BookPageContentAuthor">
                <h2>Author: Ha-Joon Chang</h2>
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur,
                    veniam esse ratione in voluptatibus alias numquam adipisci temporibus expedita
                    quod dolore vel sapiente dolor itaque, possimus minima illum! Unde. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur, veniam esse
                    ratione in voluptatibus alias numquam adipisci temporibus expedita quod dolore
                    vel sapiente dolor itaque, possimus minima illum! Unde.
                </p>
            </div>
        </div>
    );
}
