import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/Shop/Shop";
import { BookPage } from "./pages/bookPage/BookPage";
import { Cart } from "./pages/Cart/Cart";
import { AboutUs } from "./pages/aboutUs/AboutUs";

export function Router() {
    //Fazer a página de favoritos, identica ao de shoppingcart sem o botão
    //Fazer a página about us que esqueceu
    //Fazer a página about us que esqueceu
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/bookpage" element={<BookPage />} />
            <Route path="/shoppingcart" element={<Cart />} />
        </Routes>
    );
}
