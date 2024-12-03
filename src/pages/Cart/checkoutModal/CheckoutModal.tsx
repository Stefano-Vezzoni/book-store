import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "./CheckoutModal.modules.css";
import xIcon from "../../../assets/icons/x-icon.svg";
import { z } from "zod";
import { CheckoutFormField } from "../checkoutFormField/CheckoutFormField";
import { ModalTable } from "./modalTable/ModalTable";
import { formFieldElements } from "./formFieldElements/FormFieldElements";

interface ICheckoutModal {
    isOpen: boolean;
    onClose: () => void;
}

const checkoutSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    streetAddress: z.string().min(1, "Street Address is required"),
    additionalInfo: z.string().optional(),
    town: z.string().min(1, "Town / City is required"),
    state: z.string().min(1, "State / County is required"),
});

export type checkoutFormValues = z.infer<typeof checkoutSchema>;

export function CheckoutModal({ isOpen, onClose }: ICheckoutModal) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<checkoutFormValues>({
        resolver: zodResolver(checkoutSchema),
    });

    function onSubmit(data: checkoutFormValues) {
        console.log(data);
    }

    if (!isOpen) return null;

    return (
        <div className="checkoutModalContainer">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <h2>Checkout Details</h2>

                <button onClick={onClose} className="checkoutModalCloseButton">
                    <img src={xIcon} />
                </button>

                <div className="checkoutModalFormFields">
                    {formFieldElements.map((element) => (
                        <CheckoutFormField
                            key={element.id}
                            id={element.id}
                            label={element.label}
                            register={register}
                            errors={errors[element.id]}
                            isOptional={element.isOptional || false}
                        />
                    ))}
                </div>

                <div className="checkoutModalYourOrderContainer">
                    <h3>Your Order</h3>

                    <ModalTable />
                </div>

                <button className="checkoutModalSubmitButton" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
