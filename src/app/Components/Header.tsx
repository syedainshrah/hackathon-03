import React from 'react';
import { IoMdHeartEmpty, IoMdContact } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="flex justify-between items-center bg-yellow-200 py-4 px-6 sm:px-12 md:px-16 ">

                {/* Links Section */}
                <div className="flex justify-center items-center gap-16 sm:gap-8 md:gap-12 lg:gap-16 flex-grow">
                    <Link href="/">Home</Link>
                    <Link href="/pages/shop">Shop</Link>
                    <Link href="/About">About</Link>
                    <Link href="/pages/contact">Contact</Link>
                </div>

                {/* Icons Section */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8">

                    {/* Account Icon */}
                    <div>
                        <Link href="/pages/account">
                            <IoMdContact />
                        </Link>
                    </div>

                    {/* Wishlist Icon */}
                    <div>
                        <IoMdHeartEmpty />
                    </div>

                    {/* Cart Icon (Linked to `/cart`) */}
                    <div>
                        <Link href="/cart">
                            <IoCartOutline />
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
