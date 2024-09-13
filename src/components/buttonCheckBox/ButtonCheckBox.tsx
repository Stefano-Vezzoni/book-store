import { useState } from "react";
import "./ButtonCheckBox.modules.css";

interface ButtonCheckboxProps {
    label: string;
}

export function ButtonCheckbox({ label }: ButtonCheckboxProps) {
    const [checked, setChecked] = useState(false);

    function handleToggle() {
        setChecked(!checked);
    }

    return (
        <button className="buttonContainer" onClick={handleToggle}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleToggle}
                className="buttonCheckBox"
            />
            {label}
        </button>
    );
}
