"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { addtoCart } from "../action/actions";
import Swal from "sweetalert2";

// 🛠️ Fix: Added `_type: "slug"` in `slug`
interface IProduct {
  _id: string;
  _type: "product";
  productName: string;
  price: number;
  slug: {
    _type: "slug"; // ✅ Fix: Added `_type`
    current: string;
  };
  description: string;
  discountPercentage: number;
  image: {
    asset: {
      _ref: string;
      _type: "image"; 
    };
  };
  inventory: number;
}

// 🛠️ Fetch Products Function (Now Fixed)
const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const data: IProduct[] = await client.fetch(
      `*[_type == "product"] | order(_createdAt desc)[0...4] {
        _id,
        _type,
        productName,
        price,
        slug,
        discountPercentage,
        description,
        image,
        inventory
      }`
    );
    return data.map((product) => ({
      ...product,
      slug: { ...product.slug, _type: "slug" }, // ✅ Fix applied dynamically
    }));
  } catch (error) {
    console.error("Fetching Error:", error);
    return [];
  }
};

// 🛒 Category Component
export default function Category() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  // 🛒 Handle Add to Cart
  const handleAddToCart = (e: React.MouseEvent, product: IProduct) => {
    e.preventDefault();

    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    addtoCart(product);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-lg">
            <Link href={`/product/${product.slug.current}`} className="block">
              {product.image && product.image.asset && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              )}
              <h3 className="text-lg font-semibold">{product.productName}</h3>
              <p className="text-lg font-sans">{product.description}</p>
              <p className="text-xl font-bold">{`$${product.price}`}</p>
            </Link>

            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out w-full mt-3"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
