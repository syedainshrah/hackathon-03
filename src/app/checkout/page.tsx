"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Checkout = () => {
  // Dummy cart items (Replace with actual cart logic)
  const cartItems: CartItem[] = [
    { id: 1, name: "Sample Item 1", price: 1000, quantity: 1 },
    { id: 2, name: "Sample Item 2", price: 500, quantity: 2 },
  ];

  // Calculate Total & Discount
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = total * 0.1; // Example: 10% discount
  const finalTotal = total - discount + 200; // Including Shipping Charges

  // Form State
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validate Form
  const validateForm = () => {
    return (
      formValues.firstName &&
      formValues.lastName &&
      formValues.email &&
      formValues.phone &&
      formValues.streetAddress
    );
  };

  // Handle Place Order
  const handlePlaceOrder = async () => {
    // Check validation before popup
    if (!validateForm()) {
      Swal.fire({
        title: "Error",
        text: "Please fill out all the required fields!",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Processing your order",
      text: "Please wait for a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("appliedDiscount");

        Swal.fire({
          title: "Order Successful",
          text: "Your order has been placed successfully!",
          icon: "success",
        });

        const orderData = {
          _type: "order",
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          phoneNumber: formValues.phone,
          address: formValues.streetAddress,
          totalPrice: finalTotal,
          cartItems: cartItems.map((item) => ({
            _type: "cartItem",
            productId: item.id, // Ensure correct reference
            quantity: item.quantity,
          })),
          total: total,
          discount: discount,
          orderDate: new Date().toISOString(),
        };

        try {
          await client.create(orderData);
        } catch (error) {
          console.error("Error creating order", error);
        }
      }
    });
  };

  return (
    <div>
      {/* Background Image and Title */}
      <div className="relative w-full h-[316px]">
        <Image src="/rect.png" width={1440} height={316} layout="intrinsic" alt="Background Image" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/house.png" width={100} height={100} alt="House Icon" />
        </div>
        <div className="absolute top-1/2 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl font-bold text-black mt-10 mb-4">CheckOut</h1>
          <div className="flex items-center justify-center text-black">
            <h1 className="text-xl font-bold text-black">Home</h1>
            <IoIosArrowForward className="ml-2 text-xl" />
            <h1 className="text-xl ml-2">CheckOut</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-grow">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Shipping Details */}
              <div className="lg:col-span-2 space-y-6 bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Details</h2>
                <div className="space-y-4">
                  {["firstName", "lastName", "country", "streetAddress", "townCity", "province", "zipCode", "phone", "email", "additionalInfo"].map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-gray-600 mb-1">
                        {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                      </label>
                      {field === "additionalInfo" ? (
                        <textarea
                          id={field}
                          name={field}
                          value={formValues[field as keyof typeof formValues]}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      ) : (
                        <input
                          type={field === "email" ? "email" : "text"}
                          id={field}
                          name={field}
                          value={formValues[field as keyof typeof formValues]}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-6 bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                <div className="flex justify-between text-lg font-bold mt-4">
                  <span>Total:</span>
                  <span>PKR {finalTotal}</span>
                </div>

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Checkout;
