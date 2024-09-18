import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { CartContent } from "./cartContent/CartContent";

export function Cart() {
    return (
        <div>
            <Header />
            <CartContent />
            <Footer />
        </div>
    );
}
