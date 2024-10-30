import React from 'react'

import heroBg from "../../assets/hero-bg.jpg"

export default function Hero() {
  return (
    <div className="h-[calc(90vh-64px)] flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-[45%] space-y-6">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl leading-[1.625] font-bold text-gray-900"
          style={{lineHeight: "1.1"}}>
            <span className="text-blue-600 text-4xl">PJ Renders</span>
            <br />
            3D Rendering &
            <br />
            Interior Design
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Transforming concepts into stunning visual realities. I bring your architectural dreams to life through expert 3D visualization and photorealistic rendering.
          </p>
          <div className="pt-4">
            <a 
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              tabIndex={0}
              aria-label="Get Started"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-[45%]">
          <img
            src=""
            alt="Interior rendering showcase"
            className="w-full h-auto rounded-lg shadow-xl"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
