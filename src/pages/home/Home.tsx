import { Header } from "../../components/header/Header";
import { Hero } from "./hero/Hero";
import "./Home.module.css";
import { OurBestPicks } from "./OurBestPicks/OurBestPicks";

export function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <OurBestPicks />
        </div>
    );
}
