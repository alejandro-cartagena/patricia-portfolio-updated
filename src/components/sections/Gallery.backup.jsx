import React, { useState } from 'react';
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "react-photo-album/masonry.css";

import photos from '../../data/photoGallery';

const GallerySection = () => {
  const [index, setIndex] = useState(-1);

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
          <MasonryPhotoAlbum
            photos={photos}
            layout="masonry"
            spacing={20}
            columns={(containerWidth) => {
              if (containerWidth < 640) return 1;
              if (containerWidth < 768) return 2;
              if (containerWidth < 1024) return 3;
              return 4;
            }}
            onClick={({ index }) => setIndex(index)}
            imageProps={{ style: { objectFit: "cover" } }}
          />

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