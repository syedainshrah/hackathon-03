import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty, IoMdContact } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Header() {
    return (
        <header className='w-full'>
            <div className="flex justify-between items-center bg-white py-4 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto h-[80px] shadow-md mt-2">

                {/* Links Section - Centered */}
                <div className="flex justify-center items-center gap-8 sm:gap-6 md:gap-8 flex-grow text-center">
                    <Link href="/" className="text-xs sm:text-sm md:text-base hover:text-blue-500">Home</Link>
                    <Link href="/pages/shop" className="text-xs sm:text-sm md:text-base hover:text-blue-500">Shop</Link>
                    <Link href="/About" className="text-xs sm:text-sm md:text-base hover:text-blue-500">About</Link>
                    <Link href="/Contact" className="text-xs sm:text-sm md:text-base hover:text-blue-500">Contact</Link>
                </div>

                {/* Icons Section - Pushed to the right */}
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 ml-auto">
                    {/* Contact Icon */}
                    <div className="text-lg sm:text-xl md:text-2xl">
                        <IoMdContact />
                    </div>

                    {/* Search Icon */}
                    <div className="text-lg sm:text-xl md:text-2xl">
                        <CiSearch />
                    </div>

                    {/* Wishlist Icon */}
                    <div className="text-lg sm:text-xl md:text-2xl">
                        <IoMdHeartEmpty />
                    </div>

                    {/* Cart Icon */}
                    <div className="text-lg sm:text-xl md:text-2xl">
                        <IoCartOutline />
                    </div>
                </div>

            </div>
        </header>
    );
}
