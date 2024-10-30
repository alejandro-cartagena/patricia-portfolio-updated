import React from 'react'

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
              src="/src/assets/interior-render.jpg" 
              alt="Interior Visualization"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interior Visualization</h3>
              <p className="text-gray-600">Transform your interior concepts into photorealistic 3D renderings that showcase every detail of your design vision.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/src/assets/exterior-render.jpg" 
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
              src="/src/assets/product-render.jpg" 
              alt="Product Visualization"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Visualization</h3>
              <p className="text-gray-600">Showcase your products with high-quality 3D renders that highlight every feature and detail with precision.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/src/assets/360-render.jpg" 
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
              src="/src/assets/animation-render.jpg" 
              alt="3D Animation"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3D Animation</h3>
              <p className="text-gray-600">Bring your designs to life with dynamic 3D animations that showcase your project in motion.</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/src/assets/vr-render.jpg" 
              alt="VR Visualization"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">VR Visualization</h3>
              <p className="text-gray-600">Experience designs in virtual reality with interactive VR-ready 3D visualizations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
