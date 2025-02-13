"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import Swal from "sweetalert2";
import { addtoCart } from "@/app/action/actions";
import Link from "next/link";
import { useParams } from "next/navigation"; // ✅ Use `useParams` for dynamic routes

export default function ProductPage() {
  const { slug } = useParams(); // ✅ Get slug dynamically
  const [product, setProduct] = useState<Product | null>(null);

  // ✅ Fetch product on mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await client.fetch(
          groq`
            *[_type == "product" && slug.current == $slug][0]{
              _id,
              productName,
              _type,
              image,
              price
            }`,
          { slug }
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (!product) {
    return <p className="text-center text-xl font-semibold mt-10 text-red-500">Product not found.</p>;
  }

  const handleAddToCart = () => {
    addtoCart(product);
    Swal.fire({
      title: "Added to Cart!",
      text: `${product.productName} has been added.`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.productName}</h1>
          <p className="text-2xl font-bold">${product.price}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/checkout">
              <button className="bg-gradient-to-r from-red-500 to-stone-500 text-white text-xl font-bold rounded-lg px-6 py-3 shadow-md hover:opacity-90 transition-all duration-300 w-full sm:w-auto">
                Buy Now
              </button>
            </Link>

            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-red-500 to-teal-500 text-white text-xl font-bold rounded-lg px-6 py-3 shadow-md hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
