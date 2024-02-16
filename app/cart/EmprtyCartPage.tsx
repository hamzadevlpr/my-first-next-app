import React from "react";

function EmprtyCartPage() {
  return (
    <div className="text-gray-800  flex items-center justify-center h-[75.5vh] bg-white py-48">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="font-bold text-7xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-40 h-40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            Empty Cart
          </div>
          <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            Your cart is empty. Go back to the store and find something you like
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmprtyCartPage;
