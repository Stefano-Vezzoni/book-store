import "./Footer.modules.css";
import footerImage from "../../assets/footer-image.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Footer() {
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
                    <img src={facebookIcon} />
                    <img src={linkedinIcon} />
                </div>
            </div>
        </div>
    );
}
