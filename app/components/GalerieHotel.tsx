"use client";
import { useState } from 'react';

interface GalerieProps {
  images: string[];
}

export default function GalerieHotel({ images }: GalerieProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className='max-w-[1200px] mx-auto my-12 px-4'>
      <div className="flex flex-col md:flex-row md:items-start md:justify-center">
        <div className='w-full h-[300px] md:h-[600px] md:w-3/4'>
          <img src={selectedImage} alt="image villa" className='w-full h-full object-cover rounded-md' />
        </div>
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 mt-4 md:mt-0 md:ml-4 overflow-x-auto md:overflow-x-visible">
          {images.map((item, index) => (
            <img
              src={item}
              key={index}
              className={`w-full h-16 object-cover rounded-md cursor-pointer transition-all duration-300 ${selectedImage === item ? "ring-2 ring-yellow-500" : ""}`}
              onClick={() => setSelectedImage(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
