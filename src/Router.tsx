import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/Shop/Shop";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
    );
}
