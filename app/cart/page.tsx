"use client";
import React from "react";
import { useCartContext } from "../Context/CartContext";
import EmprtyCartPage from "./EmprtyCartPage";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

function Page() {
  const { items, productQuantities, setProductQuantities } = useCartContext();
  const shippingPrice = 4.99;

  if (!items) {
    return <EmprtyCartPage />;
  }

  const uniqueItems = items.filter(
    (item, index, self) => index === self.findIndex((i) => i.id === item.id)
  );

  const handleIncrement = (itemId: number) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId: number) => {
    if (productQuantities[itemId] && productQuantities[itemId] > 0) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  const subtotal = uniqueItems.reduce(
    (acc, item) => acc + item.price * (productQuantities[item.id] || 0),
    0
  );

  const total = subtotal + shippingPrice;

  return (
    <>
      {items.length > 0 ? (
        <div className="h-screen bg-gray-100 pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {uniqueItems.map((item, index) => (
                <div
                  key={index}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={160} 
                    height={160}
                    className="object-contain w-40 rounded-lg sm:w-20"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-xs font-semibold text-gray-700">
                        {item.category}
                      </p>
                      <p className="mt-1 text-xs text-gray-700 ">
                        {item.description.slice(0, 150)}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <button
                          onClick={() => handleDecrement(item.id)}
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-gray-700 hover:text-blue-50"
                        >
                          -
                        </button>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={
                            productQuantities[item.id] ||
                            productQuantities[item.id] === 0
                              ? productQuantities[item.id]
                              : 1
                          }
                          min={1}
                        />
                        <button
                          onClick={() => handleIncrement(item.id)}
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-gray-700 hover:text-blue-50"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-4 flex-col justify-center">
                        <p className="text-sm">
                          $
                          {(item.price * productQuantities[item.id]).toFixed(2)}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-rose-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Sub total */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">${shippingPrice.toFixed(2)}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div>
                  <p className="mb-1 text-lg font-bold">
                    ${total.toFixed(2)} USD
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-gray-700 py-1.5 font-medium text-blue-50 hover:bg-gray-800">
                Check out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <EmprtyCartPage />
        </>
      )}
    </>
  );
}

export default Page;
