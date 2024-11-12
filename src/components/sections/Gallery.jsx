import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from '../../data/photoGallery';

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedPhotos = photos.length > 6 && !isExpanded && isMobile
    ? photos.slice(0, 6)
    : photos;

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1
  };

  return (
    <section className="w-full py-10 md:py-16 bg-gray-50">
      <div className="px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          3D Rendering Gallery
        </h2>
        
        <div 
          role="region" 
          aria-label="3D rendering project gallery"
        >
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-5 w-auto"
            columnClassName="pl-5 bg-clip-padding"
          >
            {displayedPhotos.map((photo, photoIndex) => (
              <div 
                key={photo.src} 
                className="mb-5 overflow-hidden cursor-pointer"
                onClick={() => setIndex(photoIndex)}
              >
                <div className="overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt || "Gallery image"}
                    width={photo.width}
                    height={photo.height}
                    className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                    loading='lazy'
                  />
                </div>
              </div>
            ))}
          </Masonry>

          {photos.length > 6 && isMobile && (
            <button
              onClick={handleToggleExpand}
              className="mt-8 mx-auto block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          )}

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            carousel={{
              finite: false,
              preload: 3
            }}
            controller={{ closeOnBackdropClick: true }}
            keyboard={{ enabled: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
