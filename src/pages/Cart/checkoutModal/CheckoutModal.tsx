import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "./CheckoutModal.modules.css";
import { z } from "zod";
import { CheckoutFormField } from "../checkoutFormField/CheckoutFormField";
import { useCart } from "../../../hooks/useCart";

const checkoutSchema = z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    streetAddress: z.string().min(1, "Street Address is required"),
    additionalInfo: z.string().optional(),
    town: z.string().min(1, "Town / City is required"),
    state: z.string().min(1, "State / County is required"),
});

//Tirar a tabela daqui e colocar em outro componente e fazer o design do botão submit
//Tirar a tabela daqui e colocar em outro componente e fazer o design do botão submit
//Tirar a tabela daqui e colocar em outro componente e fazer o design do botão submit
//Tirar a tabela daqui e colocar em outro componente e fazer o design do botão submit
//Tirar a tabela daqui e colocar em outro componente e fazer o design do botão submit

export type checkoutFormValues = z.infer<typeof checkoutSchema>;

export function CheckoutModal() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<checkoutFormValues>({
        resolver: zodResolver(checkoutSchema),
    });

    const { cart } = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    function onSubmit(data: checkoutFormValues) {
        console.log(data);
    }

    return (
        <div className="checkoutModalContainer">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <h2>Checkout Details</h2>

                <div className="checkoutModalFormFields">
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
                </div>

                <div className="checkoutModalYourOrderContainer">
                    <h3>Your Order</h3>

                    <table className="checkoutTableContainer">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((cartItem) => (
                                <tr key={cartItem.id}>
                                    <td>
                                        {cartItem.title} (x{cartItem.quantity})
                                    </td>
                                    <td className="checkoutPriceElements">
                                        ${(cartItem.price * cartItem.quantity).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                            <tr className="checkoutTableTotalContainer">
                                <td>Total</td>
                                <td className="checkoutPriceElements">${totalPrice.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
