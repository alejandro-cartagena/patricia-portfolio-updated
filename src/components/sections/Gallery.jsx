import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from '../../data/photoGallery';

const GallerySection = () => {
  const [index, setIndex] = useState(-1);

  const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    640: 1
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="px-4">
        <h2 className="text-5xl font-bold text-center mb-12">
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
            {photos.map((photo, photoIndex) => (
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
                  />
                </div>
              </div>
            ))}
          </Masonry>

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
