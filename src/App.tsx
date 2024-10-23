import "./global.css";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ScrollToTop />
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
