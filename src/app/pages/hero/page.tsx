"use client"
import Header from "@/app/Components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2"; // For sweet alerts

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes?: string[]; // Optional, since not all products have sizes
  description: string;
}

export default function ProductDetails() {
  // Main product data
  const product: Product = {
    id: "1",
    name: "Sofa",
    price: 89,
    image: "/sofa.png", 
    sizes: ["Large", "Medium", "Small"],
    description: "A comfortable and stylish sofa for your living room.",
  };

  // Related products data
  const relatedProducts: Product[] = [
    {
      id: "2",
      name: "Armchair",
      price: 49,
      image: "/img.png",
      description: "A cozy armchair for your living space.",
    },
    {
      id: "3",
      name: "Coffee Table",
      price: 59,
      image: "/img4.png",
      description: "A stylish coffee table for your living room.",
    },
    {
      id: "4",
      name: "Bookshelf",
      price: 79,
      image: "/img7.png",
      description: "A modern bookshelf for your home or office.",
    },
    {
      id: "5",
      name: "Chair Set",
      price: 29,
      image: "/img5.png",
      description: "A sleek lamp to brighten up your space.",
    },
  ];

  // State for selected size
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Add to Cart Handler
  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      Swal.fire({
        title: "Size Required!",
        text: "Please select a size before adding to cart.",
        icon: "warning",
      });
      return;
    }

    const productWithSize = { ...product, selectedSize: selectedSize || "" };

    // Add the product to the cart (You can implement this with state management or API calls)
    console.log("Product added to cart:", productWithSize);

    Swal.fire({
      title: "Added to Cart!",
      text: `${product.name} has been added to your cart.`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header at the top */}
      <Header />

      {/* Main content below the header */}
      <div className="flex-grow container mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>

            {/* Sizes */}
            {product.sizes && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Sizes</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border border-gray-300 rounded-lg ${
                        selectedSize === size ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-4 flex gap-4">
              {/* Buy Now Button */}
              <Link href="/checkout">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all">
                  Buy Now
                </button>
              </Link>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 bg-white"
              >
                {/* Product Image */}
                <div className="w-full h-60 flex items-center justify-center bg-gray-100 rounded-lg">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <h3 className="text-lg font-semibold mt-4">{relatedProduct.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{relatedProduct.description}</p>
                <p className="text-lg font-bold mt-2">${relatedProduct.price.toFixed(2)}</p>

                {/* Buttons */}
                <div className="mt-4 flex flex-col gap-2">
                  <button
                    onClick={handleAddToCart}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                  >
                    Add to Cart
                  </button>

                  <Link href="/checkout">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
