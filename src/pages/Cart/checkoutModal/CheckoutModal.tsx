import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "./CheckoutModal.modules.css";
import { z } from "zod";
import { CheckoutFormField } from "../checkoutFormField/CheckoutFormField";

const checkoutSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    streetAddress: z.string().min(1, "Street Address is required"),
    additionalInfo: z.string().optional(),
    town: z.string().min(1, "Town / City is required"),
    state: z.string().min(1, "State / County is required"),
});

export type checkoutFormValues = z.infer<typeof checkoutSchema>;

export function CheckoutModal() {
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

    return (
        <div className="checkoutModalContainer">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <CheckoutFormField
                    id="firstName"
                    label="First Name"
                    register={register}
                    errors={errors.firstName}
                />

                <CheckoutFormField
                    id="lastName"
                    label="Last Name"
                    register={register}
                    errors={errors.lastName}
                />

                <CheckoutFormField
                    id="streetAddress"
                    label="Street Address"
                    register={register}
                    errors={errors.streetAddress}
                />

                <CheckoutFormField
                    id="additionalInfo"
                    label="Apartment/Suite"
                    register={register}
                    errors={errors.additionalInfo}
                    isOptional
                />

                <CheckoutFormField
                    id="town"
                    label="Town / City"
                    register={register}
                    errors={errors.town}
                />

                <CheckoutFormField
                    id="state"
                    label="State / County"
                    register={register}
                    errors={errors.state}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
