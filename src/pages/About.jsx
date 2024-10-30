import React from 'react'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[600px]">
            <img
              src="/patricia-profile.jpg" 
              alt="Patricia working at her desk"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <h2 className="text-blue-600 text-2xl font-bold">About</h2>
            <h1 className="text-4xl font-bold text-gray-900">
              Meet Patricia Jaramillo
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Patricia has over 20 years of experience in the construction industry. She began her career working at the municipality of Miami Beach. Her work with the municipality was the catalyst for her to pursue Interior Design and ultimately led to her finding her passion in rendering. Being able to assist clients in visualizing their completed projects prior to even breaking ground has been an incredibly rewarding experience. Patricia enjoys being able to show her clients various adaptations as to how their vision can be brought to life through her skills as a 3D and animation art director. Notable clients include Bonet International, Pollo Tropical, Estrutura LLC and many more.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
