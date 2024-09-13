import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { ShopContent } from "./shopContent.tsx/ShopContent";

export function Shop() {
    return (
        <div>
            <Header />
            <ShopContent />
            <Footer />
        </div>
    );
}
