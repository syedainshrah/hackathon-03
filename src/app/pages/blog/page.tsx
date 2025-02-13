"use client"
import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCog, FaArchive, FaTree } from "react-icons/fa";
import Icon from '@/app/Components/Icon';

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Image and Title Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
        {/* Background Image */}
        <Image
          src="/rect.png"
          alt="Background"
          width={1440}
          height={316}
          className="object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mb-40">
          {/* House Icon */}
          <Image
            src="/house.png"
            alt="House Icon"
            width={77}
            height={77}
            className="sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-4"
          />
          
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
             Blog
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center text-black">
            <span className="text-lg sm:text-xl font-semibold">Home</span>
            <IoIosArrowForward className="mx-2 text-xl" />
            <span className="text-lg sm:text-xl">Blog</span>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side Section */}
        <div className="w-full md:col-span-2">
          {/* First Image */}
          <Image
            src="/group50.png"
            alt="Design Image"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
          {/* Text Below Image */}
          <div className="space-y-6 mt-4 text-center">
            {/* Three Icons with Text */}
            <div className="grid grid-cols-3 gap-4 items-center justify-center">
              <div className="flex flex-col items-center justify-center h-full">
                <FaUserCog className="text-4xl mb-2 text-gray-700" />
                <span className="font-medium text-center">Admin</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <FaArchive className="text-4xl mb-2 text-gray-700" />
                <span className="font-medium text-center">Dare</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <FaTree className="text-4xl mb-2 text-gray-700" />
                <span className="font-medium text-center">Wood</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl font-bold text-center">
              Going All-In with Millennial Design
            </h1>
            
            {/* Descriptive Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
              In the dynamic world of modern design, millennials are redefining aesthetic boundaries by blending minimalism, functionality, and bold creativity.
            </p>
          </div>
          
          {/* Additional Images & Text */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-full md:col-span-2">
              <Image
                src={`/group${48 + index}.png`}
                alt="Design Image"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
              <div className="space-y-6 mt-4 text-center">
                <div className="grid grid-cols-3 gap-4 items-center justify-center">
                  <div className="flex flex-col items-center justify-center h-full">
                    <FaUserCog className="text-4xl mb-2 text-gray-700" />
                    <span className="font-medium text-center">Admin</span>
                  </div>
                  <div className="flex flex-col items-center justify-center h-full">
                    <FaArchive className="text-4xl mb-2 text-gray-700" />
                    <span className="font-medium text-center">Dare</span>
                  </div>
                  <div className="flex flex-col items-center justify-center h-full">
                    <FaTree className="text-4xl mb-2 text-gray-700" />
                    <span className="font-medium text-center">Wood</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-center">
                  Going All-In with Millennial Design
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In the dynamic world of modern design, millennials are redefining aesthetic boundaries by blending minimalism, functionality, and bold creativity.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Section */}
        <div className="w-full md:col-span-1 space-y-8">
          {/* Search Bar */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <input 
              type="text" 
              className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          {/* Categories Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Categories</h3>
            <div className="grid grid-cols-1 gap-4">
              {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'].map((category, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-700">{category}</span>
                  <span className="text-gray-500">{index + 5}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Craft Section */}
          <div>
            <h3 className="text-xl font-semibold">Craft</h3>
            <p className="text-gray-700">Explore the finest materials and craftsmanship for your next project.</p>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-xl font-semibold">Recent Posts</h3>
            <div className="space-y-4 mt-4">
              {[...Array(5)].map((_, index) => {
                const imageIndex = index >= 3 ? 0 : index; // Use same image for last two posts
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <Image
                      src={`/group${48 + imageIndex}.png`}
                      alt={`Recent Post ${index + 1}`}
                      width={50}
                      height={50}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Giving all-with millennial design {index + 1}</h4>
                      <p className="text-gray-500 text-sm">2024-12-0{index + 1}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Read More Section */}
      <div className=' mt-12'>
        <h1 className="flex justify-center items-center mt-2 pb-4 font-bold">
          Read More
        </h1>
        <div className="w-24 mx-auto border-t-2 border-gray-800 "></div>
      </div>
      <Icon />
    </div>
  );
}

export default Page;
