import { Header } from "../../components/header/Header";
import { FavoriteReads } from "./favoriteReads/FavoriteReads";
import { Hero } from "./hero/Hero";
import "./Home.module.css";
import { OurBestPicks } from "./ourBestPicks/OurBestPicks";

export function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <OurBestPicks />
            <FavoriteReads />
        </div>
    );
}
