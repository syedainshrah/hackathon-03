import React from 'react';
import Image from 'next/image';


export default function Product() {
    return (

        <div>
            <h1 className='font-bold flex justify-center items-center mt-10 text-3xl'>Related Products</h1>

            <div className="bg-white py-8 px-6 sm:px-12 md:px-16">
               
                <div className="flex flex-wrap justify-between items-center w-full">

                    {/* First Image */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4">
                        <Image
                            src="/img2.png" 
                            alt="Product 1"
                            width={500}
                            height={500}
                            objectFit="cover"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Second Image */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4">
                        <Image
                            src="/chairs.jpg" 
                            alt="Product 2"
                            width={500}
                            height={500}
                            objectFit="cover"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Third Image */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4">
                        <Image
                            src="/table.png" 
                            alt="Product 3"
                            width={500}
                            height={500}
                            objectFit="cover"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Fourth Image */}
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4">
                        <Image
                            src="/img.png" 
                            alt="Product 4"
                            width={500}
                            height={500}
                            objectFit="cover"
                            className="w-full h-auto"
                        />
                    </div>

                </div>

                <div>
                    <h1 className=" flex justify-center items-center mt-10 pb-4 font-bold">
                        View More
                    </h1>

                    {/* Custom Underline with Margin */}
                    <div className="w-24 mx-auto border-t-2 border-gray-800 mt-2"></div>
                </div>

            </div>
            </div>
      
    );
}
