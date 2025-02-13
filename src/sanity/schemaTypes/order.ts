const orderSchema = {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
        {
            name: "firstName",
            title: "First Name",
            type: "string",
        },
        {
            name: "lastName",
            title: "Last Name",
            type: "string",
        },
        {
            name: "address",
            title: "Address",
            type: "string",
        },
        {
            name: "city",
            title: "City",
            type: "string",
        },
        {
            name: "zipCode",
            title: "Zip Code",
            type: "string",
        },
        {
            name: "phone",
            title: "Phone Number",
            type: "string",
        },
        {
            name: "email",
            title: "Email Address",
            type: "string",
        },
        {
            name: "cartItems", // Fix: "cartItem" ko plural kiya
            title: "Cart Items",
            type: "array",
            of: [{ type: "reference", to: [{ type: "product" }] }], // Fix: `to` ke andar array diya
        },
        {
            name: "total",
            title: "Total Price",
            type: "number",
        },
        {
            name: "status",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "Pending" },
                    { title: "Success", value: "Success" },
                    { title: "Dispatch", value: "Dispatch" },
                ],
                layout: "radio",
            },
            initialValue: "Pending",
        },
    ],
};

export default orderSchema; 
