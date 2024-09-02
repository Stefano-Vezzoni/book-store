import "./Header.modules.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import headerLogo from "../../assets/header-logo.svg";

export function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLogo">
                <span>
                    <img src={headerLogo} />
                </span>

                <span>
                    <p>NETH</p>
                    <p>BOOKPOINT</p>
                </span>
            </div>

            <nav className="navBar">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/shop">Shop</a>
                    </li>

                    <li>
                        <a href="/delivery-team">Delivery Team</a>
                    </li>

                    <li>
                        <a href="/sellers">Sellers</a>
                    </li>

                    <li className="navBarFavorites">
                        <a href="/favorites">
                            <Icon className="navBarIcon" icon="mdi:book-favorite-outline" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
