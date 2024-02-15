"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "./assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const NavList = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "About us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  return (
    <>
      <section className="flex flex-wrap place-items-center bg-gray-900 shadow-xl">
        {/* navbar */}
        <nav className="flex justify-between items-center text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
            <Image src={logo} alt="logo" className="w-28" priority={false} />
            {/* Nav Links */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-1">
              {NavList.map((item, index) => {
                const isActive = pathName === item.href;
                return (
                  <li key={index}>
                    <Link
                      className={`hover:bg-gray-200 text-center px-8 py-2 rounded hover:text-gray-900 ${
                        isActive ? "bg-gray-200 text-gray-900" : ""
                      }`}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* buttons */}
            <div className="hidden md:flex items-center gap-5">
              <button className="text-gray-50 py-2 font-semibold">
                Register
              </button>
              <div className="h-10 w-[1px] bg-gray-500"></div>
              <button className="bg-white text-black px-8 py-2 rounded-lg font-semibold hover:bg-gray-100">
                Sign In
              </button>
            </div>
            {/* mobile menu */}
            <div className="md:hidden flex flex-col items-end">
              <button
                className="focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
              {isOpen && (
                <ul className="md:hidden mt-2  absolute right-0 top-[4rem] bg-gray-900 w-full overflow-hidden transition-all ease-in-out duration-500">
                  {NavList.map((item, index) => {
                    const isActive = pathName === item.href;
                    return (
                      <li key={index}>
                        <Link
                          className={`block px-4 py-2 hover:bg-gray-200 hover:text-gray-900 ${
                            isActive ? "bg-gray-200 text-gray-900" : ""
                          }`}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                  {/* buttons */}
                  <div className="flex items-center justify-center gap-5 py-3">
                    <button className="text-gray-50 py-2 font-semibold">
                      Register
                    </button>
                    <div className="h-10 w-[1px] bg-gray-500"></div>
                    <button className="bg-white text-black px-8 py-2 rounded-lg font-semibold hover:bg-gray-100">
                      Sign In
                    </button>
                  </div>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;