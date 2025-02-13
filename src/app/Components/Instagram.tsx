import React from 'react'
import Image from 'next/image'

export default function Instagram() {
  return (
    <div className="w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[450px] relative">
      <div className="w-full h-full relative">


        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black z-10">
          <h1 className="font-bold text-3xl">Our Instagram</h1>
          <p>Follow our store on Instagram</p>
          <button className="mt-4 px-8 py-2 text-black font-semibold rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 bg-white">
            Follow Us
          </button>

        </div>

        <Image
          src="/group51.png"
          alt="Sofa"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}
