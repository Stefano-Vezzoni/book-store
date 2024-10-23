import "./Footer.modules.css";
import footerImage from "../../assets/footer-image.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Footer() {
    function goToFacebook() {
        window.open("https://www.facebook.com", "_blank");
    }

    function goToInstagram() {
        window.open("https://www.instagram.com", "_blank");
    }

    return (
        <div className="footerContainer">
            <div>
                <img src={footerImage} />
            </div>

            <hr />

            <div className="footerContentContainer">
                <div>
                    <p className="alignIcon">
                        <Icon icon="mynaui:letter-c-circle" />
                        2024 | Neth BookPoint
                    </p>
                </div>

                <p className="highlightedText">
                    Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and register for
                    our online platform to enjoy maximum benefits!
                </p>

                <div className="socialMediaIcons">
                    <button onClick={goToFacebook}>
                        <img src={facebookIcon} />
                    </button>

                    <button onClick={goToInstagram}>
                        <img src={linkedinIcon} />
                    </button>
                </div>
            </div>
        </div>
    );
}
