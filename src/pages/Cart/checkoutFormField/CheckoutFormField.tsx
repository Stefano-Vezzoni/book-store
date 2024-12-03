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
                {label} {!isOptional && <span>*</span>}
            </label>
            <input type="text" id={id} {...register(id)} />
            {errors && <p className="checkoutFormError">{errors.message}</p>}
        </div>
    );
}
