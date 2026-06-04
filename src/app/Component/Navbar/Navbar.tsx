"use client"
import React, { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X } from "lucide-react";
import Image from 'next/image';
export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <nav className="navbar bg-[#191919]">
        <div className="container">
          <div className="navigation flex justify-between py-8 relative">
            <div className="logo">
              <Link href="/">
                <Image src="/nav/logo.png" alt="Logo" width={150} height={100} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links hidden md:block">
              <ul className="flex gap-12">
                <li className={`text-md font-bold transition-all duration-700 ${pathname === "/"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                  }`}>
                  <Link href="/">Home</Link>
                </li>

                <li className={`text-md font-bold transition-all duration-700 ${pathname === "/Common/Headphone"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                  }`}>
                  <Link href="/Common/Headphone">Headphones</Link>
                </li>

                <li className={`text-md font-bold transition-all duration-700 ${pathname === "/Common/Speaker"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                  }`}>
                  <Link href="/Common/Speaker">Speakers</Link>
                </li>

                   <li className={`text-md font-bold transition-all duration-700 ${pathname === "/Common/Earphones"
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                  }`}>
                  <Link href="/Common/Earphones">Earphones</Link>
                </li>
              </ul>
            </div>
            
            <div className="nav-cart flex items-center gap-4">
              <div className="md:hidden">
                <Menu 
                  className='cursor-pointer hover:text-orange-500 transition-all duration-700' 
                  onClick={() => setIsMenuOpen(true)}
                />
              </div>
              <ShoppingCart className='cursor-pointer hover:text-orange-500 transition-all duration-700' />
            </div>
          </div>
          <hr />

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setIsMenuOpen(false)}>
              <div className="fixed top-0 left-0 h-full w-64 bg-[#191919] z-50 p-6" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-end mb-8">
                  <X 
                    className='cursor-pointer text-white hover:text-orange-500 transition-all duration-700' 
                    onClick={() => setIsMenuOpen(false)}
                  />
                </div>
                <ul className="flex flex-col gap-6">
                  <li className={`text-md font-bold transition-all duration-700 ${pathname === "/"
                      ? "text-orange-500"
                      : "text-white hover:text-orange-500"
                    }`}>
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  </li>

                  <li className={`text-md font-bold transition-all duration-700 ${pathname === "/Common/Headphone"
                      ? "text-orange-500"
                      : "text-white hover:text-orange-500"
                    }`}>
                    <Link href="/Common/Headphone" onClick={() => setIsMenuOpen(false)}>Headphones</Link>
                  </li>

                  <li className={`text-md font-bold transition-all duration-700 ${pathname === "/Common/Speaker"
                      ? "text-orange-500"
                      : "text-white hover:text-orange-500"
                    }`}>
                    <Link href="/Common/Speaker" onClick={() => setIsMenuOpen(false)}>Speakers</Link>
                  </li>

                  <li className={`text-md font-bold transition-all duration-700 ${pathname === "/Common/Earphones"
                      ? "text-orange-500"
                      : "text-white hover:text-orange-500"
                    }`}>
                    <Link href="/Common/Earphones" onClick={() => setIsMenuOpen(false)}>Earphones</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

      </nav>
    </>
  )
}