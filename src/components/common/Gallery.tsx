'use client';
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery({
  heading,
  subHeading,
  images,
}: {
  heading: string;
  subHeading: string;
  images: string[];
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImagePosition, setSelectedImagePosition] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  // Handle body scroll lock
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const handleImageClick = (
    image: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    setSelectedImagePosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
    setSelectedImage(image);
  };

  return (
    <div className='px-4 md:px-8 py-12 min-h-screen flex flex-col items-center justify-center bg-secondary'>
      <div className='max-w-[1170px]'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2'>{heading}</h1>
          <p className='text-sm md:text-base text-muted-foreground'>
            {subHeading}
          </p>
        </div>
        <div className='grid-gallery'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`grid-item ${
                index % 5 === 0 || index % 5 === 3 ? 'grid-item-large' : ''
              } cursor-pointer`}
              onClick={(e) => handleImageClick(image, e)}
            >
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && selectedImagePosition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4'
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className='relative max-w-[90vw] max-h-[90vh] flex items-center justify-center'
              initial={{
                top: selectedImagePosition.top,
                left: selectedImagePosition.left,
                width: selectedImagePosition.width,
                height: selectedImagePosition.height,
                position: 'fixed',
              }}
              animate={{
                top: '50%',
                left: '50%',
                width: '90vw',
                height: 'auto',
                y: '-50%',
                x: '-50%',
                position: 'fixed',
              }}
              exit={{
                top: selectedImagePosition.top,
                left: selectedImagePosition.left,
                width: selectedImagePosition.width,
                height: selectedImagePosition.height,
                position: 'fixed',
              }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className='absolute top-4 right-4 z-50 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all'
              >
                <X className='w-6 h-6 text-white' />
              </button>
              <img
                src={selectedImage}
                alt='Selected'
                className='max-w-full max-h-[90vh] object-contain'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
