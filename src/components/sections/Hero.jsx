import React from 'react'
import { Link } from 'react-router-dom';

const heroImage = "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"

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
            <Link 
              to="/portfolio"
              className="inline-block px-8 py-3 bg-blue-600 text-white text-xl font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              tabIndex={0}
              aria-label="View Portfolio"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-[45%]">
          <img
            src={heroImage}
            alt="Modern architectural 3D visualization showing a minimalist interior space"
            className="w-full h-auto rounded-lg shadow-xl object-cover"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
