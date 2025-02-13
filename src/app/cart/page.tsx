"use client";

import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Product has been removed from the cart.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.inventory * item.price, 0);
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please confirm your order",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        router.push("/checkout");
        setCartItems(getCartItems());
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty 😢</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b pb-4">
                
                {/* ✅ Sanity Image Fix */}
                {item.image?.asset?._ref && (
                  <Image
                    src={urlFor(item.image.asset._ref).url()}
                    alt="Product Image"
                    width={128}
                    height={128}
                    objectFit="contain"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                )}

                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.productName}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total & Checkout */}
          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">Total: ${calculatedTotal().toFixed(2)}</p>
            <button
              onClick={handleProceed}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
