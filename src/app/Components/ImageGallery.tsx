import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

export default function ImageGallery() {
    return (
        <div className="relative w-full" style={{ height: '316px' }}>
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full">
                <Image
                    src="/rect.png"
                    alt="Background"
                    width={1440}
                    height={316}
                    objectFit="cover"
                />
            </div>

            <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                <Image
                    src="/house.png"
                    alt="House Icon"
                    width={80}
                    height={80}
                    className="sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                />
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
                <h1 className="text-xl sm:text-3xl md:text-3xl font-bold text-black mt-0 mb-6 flex justify-center items-center">Shop</h1>

                <div className="flex items-center justify-center mt-2 mb-10">
                    <h1 className="text-xl sm:text-xl md:text-xl font-bold text-black">Home</h1>
                    <IoIosArrowForward className="ml-2 text-xl" />
                    <h1 className="text-xl sm:text-xl md:text-xl text-black ml-2">Shop</h1>
                </div>
            </div>
        </div>
    )
}
