"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface Product {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }
  useEffect(() => {
    getData();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!products || products.length === 0) return <p>No products data</p>;
  return (
    <>
      {products.length > 0 && (
        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-10 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {products.map(
            ({ title, description, image, price, category }, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-lg h-full pb-10"
                >
                  <Image
                    width={300}
                    height={300}
                    src={image}
                    alt={title}
                    className="object-contain w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                  />
                  {/* title and description */}
                  <div className="h-full flex flex-col justify-between items-start">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                      {title}
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      {description.slice(0, 80)}
                    </p>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #{category}
                    </span>
                    <p className="mt-3 text-sm text-gray-600">
                     <span className="font-bold">Price : </span> $ {price}
                    </p>
                  </div>

                  {/* buttons */}
                  <div className="">
                    <button
                      type="button"
                      className="mt-4 w-full rounded bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 hover:text-gray-50"
                    >
                      Buy now
                    </button>
                    <button
                      type="button"
                      className="mt-2 w-full rounded border border-gray-600 px-2 py-1.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-black/90 hover:text-gray-50"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </>
  );
}

export default ProductsPage;
