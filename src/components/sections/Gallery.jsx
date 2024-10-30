import React from 'react';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

const GallerySection = () => {
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      width: 1600,
      height: 900,
      alt: 'Modern minimalist living room with large windows',
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
      width: 1200,
      height: 1200,
      alt: 'Contemporary kitchen design',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      width: 1600,
      height: 1067,
      alt: 'Luxury bathroom interior',
    },
    {
      src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
      width: 1600,
      height: 900,
      alt: 'Modern architectural exterior',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
      width: 1200,
      height: 1200,
      alt: 'Minimalist bedroom design',
    },
    {
      src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab',
      width: 1600,
      height: 1067,
      alt: 'Contemporary office space',
    },
    {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
      width: 1600,
      height: 1067,
      alt: 'Modern open concept living and dining area',
    },
    {
      src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      width: 1600,
      height: 900,
      alt: 'Luxury penthouse interior with city views',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      width: 1200,
      height: 1200,
      alt: 'Contemporary home office design',
    },
    {
      src: 'https://images.unsplash.com/photo-1618219944342-824e40a13285',
      width: 1600,
      height: 1067,
      alt: 'Minimalist outdoor living space',
    },
    {
      src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
      width: 1600,
      height: 900,
      alt: 'Modern kitchen with island and pendant lights',
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div>
        <h2 className="text-5xl font-bold text-center mb-12">
          3D Rendering Gallery
        </h2>
        
        <div 
          role="region" 
          aria-label="3D rendering project gallery"
        >
          <MasonryPhotoAlbum
            photos={photos}
            columns={(containerWidth) => {
              if (containerWidth < 640) return 1;
              if (containerWidth < 768) return 2;
              if (containerWidth < 1024) return 3;
              return 4;
            }}
            spacing={8}
            renderPhoto={({ photo, imageProps: { alt, style, ...restImageProps } }) => (
              <img
                alt={alt}
                className='cursor-pointer rounded-lg'
                {...restImageProps}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
