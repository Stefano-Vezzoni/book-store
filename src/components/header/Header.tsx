import "./Header.modules.css";
import headerLogo from "../../assets/header-logo.svg";
import { ShoppingCartIcon } from "../../assets/icons/shoppingCartIcon";
import { FavoriteBookIcon } from "../../assets/icons/favoriteBookIcon";

export function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLogo">
                <a href="/">
                    <img src={headerLogo} />
                </a>

                <a href="/">
                    <p>NETH</p>
                    <p>BOOKPOINT</p>
                </a>
            </div>

            <div className="headerMidNavBar">
                <a href="/">Home</a>

                <a href="/shop">Shop</a>

                <a href="/about">About</a>
            </div>

            <div className="headerEndNavBar">
                <a href="/favorites">
                    <FavoriteBookIcon fill="white" width="28" height="28" />
                </a>

                <a href="/shoppingcart">
                    <ShoppingCartIcon fill="white" width="32" height="32" />
                </a>
            </div>
        </div>
    );
}
