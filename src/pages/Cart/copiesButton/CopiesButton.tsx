import "./CopiesButton.modules.css";
import { Icon } from "@iconify/react/dist/iconify.js";

export function CopiesButton() {
    return (
        <div className="CopiesButtonContainer">
            <p>Copies</p>

            <div className="CounterContainer">
                <button>
                    <Icon icon="ic:baseline-plus" />
                </button>

                <p>1</p>

                <button>
                    <Icon icon="ic:round-minus" />
                </button>
            </div>
        </div>
    );
}
