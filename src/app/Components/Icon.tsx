import React from 'react'

export default function Icon() {
    return (
        <div className="flex flex-wrap justify-between items-start  ml-5 mr-5 bg-orange-100 p-8 min-h-[250px]">

            {/* Free Delivery Section */}
            <div className="flex flex-col justify-start items-start w-full sm:w-1/3 md:w-1/4 p-4 ">
                <h1 className="text-black text-2xl font-bold">Free Delivery</h1>
                <p className="text-gray-400 mt-2">For all orders over $50, consectetur adipim scing elit.</p>
            </div>

            {/* 90 Days Return Section */}
            <div className="flex flex-col justify-start items-start w-full sm:w-1/3 md:w-1/4 p-4">
                <h1 className="text-black text-2xl font-bold">90 Days Return</h1>
                <p className="text-gray-400 mt-2">If goods have problems, consectetur adipim scing elit.</p>
            </div>

            {/* Secure Payment Section */}
            <div className="flex flex-col justify-start items-start w-full sm:w-1/3 md:w-1/4 p-4">
                <h1 className="text-black text-2xl font-bold">Secure Payment</h1>
                <p className="text-gray-400 mt-2">100% secure payment, consectetur adipim scing elit.</p>
            </div>
        </div>
    )
}
