import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { FavoriteReads } from "./favoriteReads/FavoriteReads";
import { Hero } from "./hero/Hero";
import "./Home.modules.css";
import { OurBestPicks } from "./ourBestPicks/OurBestPicks";

export function Home() {
    return (
        <div className="homeContainer">
            <Header />
            <Hero />
            <OurBestPicks />
            <FavoriteReads />
            <Footer />
        </div>
    );
}
