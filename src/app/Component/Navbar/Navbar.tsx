import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from "lucide-react";
import Image from 'next/image';
export default function Navbar() {
  return (
    <>
     <nav className="navbar bg-[#191919]">
        <div className="container">
          <div className="navigation flex justify-between py-8 ">
            <div className="logo">
              <Link href="/">
                <Image src="/nav/logo.png" alt="Logo" width={150} height={100} />
              </Link>
            </div>
          
          <div className="nav-links ">
            <ul className="flex gap-12">
              <li className="nav-item  text-md font-bold hover:text-orange-500 transition-all duration-700"><Link href="/">Home</Link></li>
              <li className="nav-item  text-md font-bold hover:text-orange-500 transition-all duration-700"><Link href="/Common/Headphone">Headphones</Link></li>
              <li className="nav-item  text-md font-bold hover:text-orange-500 transition-all duration-700"><Link href="/contact">Speakers</Link></li>
              <li className="nav-item  text-md font-bold hover:text-orange-500 transition-all duration-700"><Link href="/contact">Earphones</Link></li>
            </ul>
          </div>
          <div className="nav-cart">
            <ShoppingCart className='cursor-pointer hover:text-orange-500 transition-all duration-700' />
          </div>
          </div>
          <hr />

        </div>
        
     </nav>
    </>
   

    )}