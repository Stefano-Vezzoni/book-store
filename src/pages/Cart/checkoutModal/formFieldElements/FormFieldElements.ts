type CheckoutFieldId =
    | "firstName"
    | "lastName"
    | "streetAddress"
    | "additionalInfo"
    | "town"
    | "state";

export interface FormFieldElement {
    id: CheckoutFieldId;
    label: string;
    isOptional?: boolean;
}

export const formFieldElements: FormFieldElement[] = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "streetAddress", label: "Street Address" },
    { id: "additionalInfo", label: "Apartment/Suite", isOptional: true },
    { id: "town", label: "Town / City" },
    { id: "state", label: "State / County" },
];
