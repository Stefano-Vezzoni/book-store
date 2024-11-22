import "./EmptyGenericContent.modules.css";
import emptyGeneric from "../../assets/empty-generic.svg";

interface IEmptyGenericContent {
    name: string;
}

export function EmptyGenericContent({ name }: IEmptyGenericContent) {
    return (
        <div className="emptyGenericContainer">
            <img src={emptyGeneric} />

            <div>
                <h2>Your {name} is empty</h2>
                <p>But don't worry, there are plenty of great items waiting for you!</p>
            </div>
        </div>
    );
}
