"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { categories } from "@/Data/DataJs";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-[#191919]">
      <div className="container">
        <div className="flex justify-between py-8 relative">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/nav/logo.png"
              alt="Logo"
              width={150}
              height={100}
            />
          </Link>

         
          <div className="hidden md:block">
            <ul className="flex gap-12">
              <li
                className={`font-bold transition-all duration-300 ${
                  pathname === "/"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                }`}
              >
                <Link href="/">HOME</Link>
              </li>

              {categories.map((item) => (
                <li
                  key={item.id}
                  className={`font-bold transition-all duration-300 ${
                    pathname === `/${item?.slug}`
                      ? "text-orange-500"
                      : "hover:text-orange-500"
                  }`}
                >
                  <Link href={`/${item.slug}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="hover:text-orange-500" />
            </button>

            <ShoppingCart className="cursor-pointer hover:text-orange-500 transition-all duration-300" />
          </div>
        </div>

        <hr />

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="fixed top-0 left-0 h-full w-64 bg-[#191919] p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <X
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>

              <ul className="flex flex-col gap-6">
                <li
                  className={`font-bold ${
                    pathname === "/"
                      ? "text-orange-500"
                      : "text-white hover:text-orange-500"
                  }`}
                >
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </li>

                {categories.map((item) => (
                  <li
                    key={item.id}
                    className={`font-bold ${
                      pathname === `/${item.slug}`
                        ? "text-orange-500"
                        : "text-white hover:text-orange-500"
                    }`}
                  >
                    <Link
                      href={`/${item.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}