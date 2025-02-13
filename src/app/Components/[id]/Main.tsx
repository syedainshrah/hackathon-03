import React from 'react';
import Image from 'next/image';

export default function Main() {
  return (
    <div className="space-y-8">

      {/* Title and Tabs Section */}
      <div className="flex space-x-10 justify-center items-center text-xl">
        <span className="font-bold cursor-pointer">Description</span>
        <span className="cursor-pointer">Additional Information</span>
        <span className="cursor-pointer">Review[5]</span>
      </div>

      {/* Description Section */}
      <div className="flex flex-col mb-4">
        <p className="text-sm mb-2 mx-16">
          Embodying the raw, wayward spirit of rock  roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        
        <p className="text-sm mx-16">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences, while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

      {/* Image Section with Flex */}
      <div className="flex justify-center space-x-4 mx-16">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <Image 
            src="/img18.png" 
            alt="First Image" 
            width={500}  
            height={500} 
            className="w-full object-cover rounded-lg shadow-lg" 
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <Image 
            src="/img19.png" 
            alt="Second Image" 
            width={500}  
            height={500}  
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
