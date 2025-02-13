import React from 'react';
import { BsStopwatch } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link';

export default function Blog() {
    return (
        <div className="w-full max-w-screen-xl mx-auto bg-white p-4 sm:p-10 mt-6">
            {/* Title */}
            <div className='font-bold flex justify-center items-center text-2xl'>
                <h1>Our Blogs</h1>
            </div>

            <p className='text-gray-400 flex justify-center items-center mt-3'>
                Find a bright idea to suit your taste with our great selection
            </p>

            {/* Blog Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">

                {/* Blog Card 1 */}
                <div className="w-full flex flex-col h-full">
                    <Image
                        src="/group49.png"
                        alt="Image 1"
                        width={500}   // Adjust width
                        height={300}  // Adjust height
                        className="w-full h-auto object-cover"
                    />
                    <h1 className='flex justify-center items-center mt-3'>Going all-in with millennial design</h1>

                    <div>
                        <h1 className="flex justify-center items-center mt-2 pb-4 font-bold">
                            Read More
                        </h1>
                        {/* Custom Underline with Margin */}
                        <div className="w-24 mx-auto border-t-2 border-gray-800"></div>
                    </div>

                    {/* Date and Time */}
                    <div className="flex items-center space-x-6 mt-2 justify-center">
                        <div className="flex items-center">
                            <BsStopwatch className="mr-2" />
                            <p>5 min</p>
                        </div>
                        <div className="flex items-center">
                            <CiCalendar className="mr-2" />
                            <p>12th Oct 2022</p>
                        </div>
                    </div>
                </div>

                {/* Blog Card 2 */}
                <div className="w-full flex flex-col h-full">
                    <Image
                        src="/group50.png"
                        alt="Image 2"
                        width={500}   // Adjust width
                        height={300}  // Adjust height
                        className="w-full h-auto object-cover"
                    />
                    <h1 className='flex justify-center items-center mt-3'>Going all-in with millennial design</h1>

                    <div>
                        <h1 className="flex justify-center items-center mt-2 pb-4 font-bold">
                            Read More
                        </h1>

                        <div className="w-24 mx-auto border-t-2 border-gray-800"></div>
                    </div>

                    {/* Date and Time */}
                    <div className="flex items-center space-x-6 mt-2 justify-center">
                        <div className="flex items-center">
                            <BsStopwatch className="mr-2" />
                            <p>5 min</p>
                        </div>
                        <div className="flex items-center">
                            <CiCalendar className="mr-2" />
                            <p>12th Oct 2022</p>
                        </div>
                    </div>
                </div>

                {/* Blog Card 3 */}
                <div className="w-full flex flex-col h-full">
                    <Image
                        src="/group48.png"
                        alt="Image 3"
                        width={500}   // Adjust width
                        height={300}  // Adjust height
                        className="w-full h-auto object-cover"
                    />
                    <h1 className='flex justify-center items-center mt-3'>Going all-in with millennial design</h1>

                    <div>
                        <h1 className="flex justify-center items-center mt-2 pb-4 font-bold">
                            Read More
                        </h1>
                        {/* Custom Underline with Margin */}
                        <div className="w-24 mx-auto border-t-2 border-gray-800"></div>
                    </div>

                    {/* Date and Time */}
                    <div className="flex items-center space-x-6 mt-2 justify-center">
                        <div className="flex items-center">
                            <BsStopwatch className="mr-2" />
                            <p>5 min</p>
                        </div>
                        <div className="flex items-center">
                            <CiCalendar className="mr-2" />
                            <p>12th Oct 2022</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* View All Posts Link */}
            <Link href="/pages/blog">
                <div className="mt-12 cursor-pointer">
                    <h1 className="flex justify-center items-center mt-2 pb-4 font-bold">
                        View All Posts
                    </h1>

                    <div className="w-24 mx-auto border-t-2 border-gray-800"></div>
                </div>
            </Link>
        </div>
    );
}
