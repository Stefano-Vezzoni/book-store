import "./CategorieButton.modules.css";

interface ICategorieButton {
    name: string;
}
export function CategorieButton({ name }: ICategorieButton) {
    return <button className="CategorieButtonContainer">{name}</button>;
}
