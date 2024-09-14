import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/Shop/Shop";
import { BookPage } from "./pages/bookPage/BookPage";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/bookpage" element={<BookPage />} />
        </Routes>
    );
}
