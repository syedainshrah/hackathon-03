"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaWhatsapp, FaTwitter, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const product = {
    id: 1,
    name: "Asgaard Sofa",
    price: 250000,
    image: "/Asgaard.png",
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    };

    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Item added to cart!");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
        {/* Breadcrumb Section */}
        <div className="flex flex-wrap items-center space-x-2 md:space-x-4 text-gray-400 md:ml-14 gap-2">
          <h1 className="text-sm md:text-base">Home</h1>
          <IoIosArrowForward className="text-gray-400 text-xs md:text-base" />
          <h1 className="text-sm md:text-base">Shop</h1>
          <IoIosArrowForward className="text-gray-400 text-xs md:text-base" />
          <h1 className="font-bold text-black text-sm md:text-base">Asgaard Sofa</h1>
        </div>

        {/* Main Product Layout */}
        <div className="flex flex-col md:flex-row mt-8">
          {/* Product Image */}
          <div className="w-full md:w-[481px] h-[300px] md:h-[500px] mb-4 md:mb-0 md:mr-8 bg-yellow-50">
            <Image src={product.image} alt={product.name} width={481} height={500} className="object-cover w-full h-full rounded-md" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-4 w-full md:w-80 px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
            <p className="text-lg md:text-xl text-gray-800">Rs. {product.price.toLocaleString()}</p>

            {/* Star Rating */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              <span className="text-gray-600 text-sm md:text-base">5 Custom Reviews</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-xs md:text-sm">
              Embodying comfort and style, the Asgaard Sofa offers a perfect blend of modern design and luxurious comfort.
            </p>

            {/* Size Selection */}
            <div className="flex space-x-2 mt-4">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 md:w-16 h-12 md:h-16 flex items-center justify-center border rounded-md ${
                    selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
              <div className="flex items-center border rounded w-full md:w-auto">
                <button onClick={() => handleQuantityChange("decrease")} className="px-3 py-2 bg-gray-100 text-sm md:text-base">-</button>
                <span className="px-4 text-sm md:text-base">{quantity}</span>
                <button onClick={() => handleQuantityChange("increase")} className="px-3 py-2 bg-gray-100 text-sm md:text-base">+</button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-black text-white flex items-center rounded w-full px-6 py-2 md:w-auto text-sm md:text-base"
              >
                Add to Cart
              </button>

              <Link href="/checkout">
                <button className="bg-blue-500 text-white flex items-center rounded w-full px-6 py-2 md:w-auto text-sm md:text-base">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-5 border-t pt-4 flex justify-center items-center">
          <div className="flex justify-end items-center text-gray-600">
            <div className="text-right space-y-2">
              <p className="text-sm">SKU: SSOOI 4</p>
              <p className="text-sm">Category: Chair</p>
              <p className="text-sm">Tags: Furniture, Chair, Home</p>
              <div className="flex justify-end items-center space-x-3 mt-2">
                <p className="text-sm mr-2">Share</p>
                <FaFacebook className="text-black text-xl cursor-pointer hover:text-blue-700" />
                <FaWhatsapp className="text-black text-xl cursor-pointer hover:text-green-600" />
                <FaTwitter className="text-black text-xl cursor-pointer hover:text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
