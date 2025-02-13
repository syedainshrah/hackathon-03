"use client";
import File from '@/app/Components/[id]/File'
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Cart = () => {
  return (
    <div className="min-h-screen bg-white">
      <File />
     
      {/* Header Section */}
      <div className="relative w-full h-[316px]">
        <Image
          src="/rect.png"
          fill
          priority
          className="object-cover"
          alt="Background Image"
        />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Image
            src="/house.png"
            width={100}
            height={100}
            alt="House Icon"
            className="mb-4"
          />
          
          <h1 className="text-3xl font-bold text-black mb-4">
            My Account
          </h1>
          
          <div className="flex items-center justify-center text-black">
            <span className="text-xl font-bold">Home</span>
            <IoIosArrowForward className="mx-2 text-xl" />
            <span className="text-xl">My Account</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Shopping Cart
            </h2>
            <table className="w-full border-collapse">
              <thead className="bg-[#fff9e5] border-b">
                <tr>
                  <th className="text-left p-3 text-gray-600 font-medium">Product</th>
                  <th className="text-right p-3 text-gray-600 font-medium">Price</th>
                  <th className="text-center p-3 text-gray-600 font-medium">Quantity</th>
                  <th className="text-right p-3 text-gray-600 font-medium">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    image: "/Asgaard.png",
                    name: "Product 1",
                    price: 1000,
                    quantity: 2,
                    subtotal: 2000,
                  },
                  {
                    id: 2,
                    image: "/Asgaard.png",
                    name: "Product 2",
                    price: 500,
                    quantity: 1,
                    subtotal: 500,
                  },
                ].map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3 flex items-center text-gray-700">
                      <Image 
                        src={item.image} 
                        height={80} 
                        width={80} 
                        alt={item.name} 
                        className="mr-4"
                      />
                      {item.name}
                    </td>
                    <td className="p-3 text-right text-gray-700">PKR {item.price}</td>
                    <td className="p-3 text-center text-gray-700">{item.quantity}</td>
                    <td className="p-3 text-right text-gray-700">
                      PKR {item.subtotal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="bg-[#fff9e5] p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Cart Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Subtotal:</span>
                <span className="text-gray-800 font-bold">PKR 2500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Shipping:</span>
                <span className="text-gray-800 font-bold">PKR 200</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-gray-900">PKR 2700</span>
              </div>
              <button className="w-full px-4 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;