import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty, IoMdContact } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Header() {
    return (
        <header >
            <div className="flex justify-between items-center bg-white py-4 px-6 sm:px-12 md:px-16 ">

                {/* Links Section */}
                <div className="flex justify-center items-center gap-16 sm:gap-8 md:gap-12 lg:gap-16 flex-grow w-{430} h-{24}">
                    <Link href="/">Home</Link>
                    <Link href="/pages/shop">Shop</Link>
                    <Link href="/About">About</Link>
                    <Link href="/Contact ">Contact</Link>
                </div>

                {/* Icons Section */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8">

                    {/* Contact Icon */}
                    <div>
                        <IoMdContact />
                    </div>

                    {/* Search Icon */}
                    <div>
                        <CiSearch />
                    </div>

                    {/* Wishlist Icon */}
                    <div>
                        <IoMdHeartEmpty />
                    </div>

                    {/* Cart Icon */}
                    <div>
                        <IoCartOutline />
                    </div>
                </div>

            </div>
        </header>
    );
}
