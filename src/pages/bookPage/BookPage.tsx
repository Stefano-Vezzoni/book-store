import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BookPageContent } from "./bookPageContent/BookPageContent";

export function BookPage() {
    return (
        <div>
            <Header />
            <BookPageContent />
            <Footer />
        </div>
    );
}
