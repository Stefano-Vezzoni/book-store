import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { FavoriteReads } from "./favoriteReads/FavoriteReads";
import { Hero } from "./hero/Hero";
import { OurBestPicks } from "./ourBestPicks/OurBestPicks";
import "./Home.modules.css";

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
