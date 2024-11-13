import { useEffect, useState } from "react";
import "./ButtonCheckBox.modules.css";

interface ButtonCheckboxProps {
    label: string;
    onToggle: (label: string, checked: boolean) => void;
    checked: boolean;
}

export function ButtonCheckbox({ label, onToggle, checked: initialChecked }: ButtonCheckboxProps) {
    const [checked, setChecked] = useState(initialChecked);

    function handleToggle() {
        setChecked(!checked);
        onToggle(label, !checked);
    }

    useEffect(() => {
        setChecked(initialChecked);
    }, [initialChecked]);

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
