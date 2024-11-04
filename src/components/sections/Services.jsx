import React from 'react'

import buildingImg from '../../assets/images/building.jpg';

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

export default function Services() {
  return (
    <section className="py-24 bg-light-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">My Rendering Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Interior Visualization"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interior Rendering</h3>
              <p className="text-gray-600">Transform your interior concepts into photorealistic 3D renderings that showcase every detail of your design vision.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
              alt="Exterior Rendering"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exterior Rendering</h3>
              <p className="text-gray-600">Create stunning architectural visualizations that bring your exterior designs to life with realistic materials and lighting.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6"
              alt="3D Floor Plans"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3D Floor Plans</h3>
              <p className="text-gray-600">Transform traditional blueprints into detailed 3D floor plans that help clients easily visualize layouts and spatial relationships.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
              alt="360° Virtual Tours"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">360° Virtual Tours</h3>
              <p className="text-gray-600">Create immersive virtual experiences that allow clients to explore spaces from every angle.</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={buildingImg}
              alt="3D Animation"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3D Animation</h3>
              <p className="text-gray-600">Bring your designs to life with dynamic 3D animations that showcase your project in motion.</p>
            </div>
          </div>

          {/* Card 6 - Replacing VR Visualization with Custom 3D Modeling */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f"
              alt="Custom 3D Modeling"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom 3D Modeling</h3>
              <p className="text-gray-600">Create detailed 3D models of architectural elements, furniture, and custom fixtures to your exact specifications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
