import React, { useState } from 'react';

interface Image {
  url: string;
  alt: string;
  caption: string;
}

interface ImageGalleryProps {
  images: Image[];
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold text-amber-800 mb-3">{title}</h3>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div className="relative h-64 sm:h-80 md:h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              aria-hidden={index !== currentIndex}
            />
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p className="text-center">{images[currentIndex].caption}</p>
          </div>
          
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 text-white transition-colors"
            aria-label="Previous image"
          >
            &#8592;
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 text-white transition-colors"
            aria-label="Next image"
          >
            &#8594;
          </button>
          
          <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;