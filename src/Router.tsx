import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/Shop/Shop";
import { BookPage } from "./pages/bookPage/BookPage";
import { Cart } from "./pages/Cart/Cart";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { Favorites } from "./pages/favorites/Favorites";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/bookpage/:id" element={<BookPage />} />
            <Route path="/shoppingcart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    );
}
