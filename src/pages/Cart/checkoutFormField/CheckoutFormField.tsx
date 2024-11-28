import { UseFormRegister, FieldError } from "react-hook-form";
import "./CheckoutFormField.modules.css";
import { checkoutFormValues } from "../checkoutModal/CheckoutModal";

interface ICheckoutFormField {
    id: keyof checkoutFormValues;
    label: string;
    register: UseFormRegister<checkoutFormValues>;
    errors?: FieldError;
    isOptional?: boolean;
}

//Terminar a parte de design dos campos etc
//Terminar a parte de design dos campos etc
//Terminar a parte de design dos campos etc
//Terminar a parte de design dos campos etc

export function CheckoutFormField({
    id,
    label,
    register,
    errors,
    isOptional = false,
}: ICheckoutFormField) {
    return (
        <div className="checkoutFormFieldContainer">
            <label htmlFor={id}>
                {label} {isOptional && <span>(Optional)</span>}
            </label>
            <input type="text" id={id} {...register(id)} />
            {errors && <p className="checkoutFormError">{errors.message}</p>}
        </div>
    );
}
