import "./global.css";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <CartProvider>
                    <ScrollToTop />
                    <Router />
                </CartProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
