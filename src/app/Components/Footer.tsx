import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="text-white py-8">
            {/* Footer Wrapper */}
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8">

                <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-16">

                    <div className="text-gray-300 space-y-2 mt-16">
                        <h1>400 University Drive Suite 200 Coral Gables, FL 33134 USA</h1>
                        <h1>Gables,</h1>
                        <h1>FL 33134 USA</h1>
                    </div>

                    {/* Links Section */}
                    <div className="text-gray-300 space-y-4">
                        <h1 className="text-xl font-bold">Links</h1>
                        <div className="flex flex-col space-y-2 text-black">
                            <Link href="#">Home</Link>
                            <Link href="#">Shop</Link>
                            <Link href="#">About</Link>
                            <Link href="#">Shop Now</Link>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div className="text-gray-300 space-y-4">
                        <h1 className="text-xl font-bold">Help</h1>
                        <div className="flex flex-col space-y-2 text-black">
                            <Link href="#">Payment Option</Link>
                            <Link href="#">Returns</Link>
                            <Link href="#">Privacy Policies</Link>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="text-gray-400">Newsletter</p>
                        <div className="flex items-center space-x-2 mt-5">

                            <p className="text-gray-400 underline">Enter Your Email Address</p>
                            <p className="text-black underline">Subscribe</p>
                        </div>
                    </div>

                </div>

                <hr className="my-8 border-t border-gray-400 mt-16"  />

                <p className='text-black'>2022 Meubel House. All rights reverved</p>

            </div>
        </div>
    )
}
