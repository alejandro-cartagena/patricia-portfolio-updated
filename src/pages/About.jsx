import React from 'react'
import { Link } from 'react-router-dom'

import aboutPicPatricia from '../assets/images/aboutPicPatricia.jpg'

export default function About() {
  const expertise = [
    { title: '3D Rendering', description: 'Specialized in photorealistic architectural visualization' },
    { title: 'Interior Design', description: 'Expert space planning and design solutions' },
    { title: 'Exterior Rendering', description: 'Photorealistic outdoor and architectural visualization' },
    { title: 'Animation', description: 'Dynamic 3D walkthroughs and presentations' },
  ]

  const testimonials = [
    {
      quote: "Patricia's attention to detail in her 3D renderings is exceptional.",
      author: "John Smith",
      company: "Bonet International"
    },
    {
      quote: "Working with Patricia made our vision come to life before construction began.",
      author: "Maria Rodriguez",
      company: "Estrutura LLC"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[600px]">
            <img
              src={aboutPicPatricia} 
              alt="Patricia smiling at her desk"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Column */}
          <div className="space-y-2 md:space-y-6">
            <h2 className="text-blue-600 text-2xl font-bold">About</h2>
            <h1 className="text-4xl pb-2 md:pb-0 font-bold text-gray-900">
              Meet Patricia Jaramillo
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Patricia has over 20 years of experience in the construction industry. She began her career working at the municipality of Miami Beach. Her work with the municipality was the catalyst for her to pursue Interior Design and ultimately led to her finding her passion in 3D rendering. Being able to assist clients in visualizing their completed projects prior to even breaking ground has been an incredibly rewarding experience. Patricia enjoys showing her clients various adaptations as to how their vision can be brought to life through her skills as a 3D Renderer. Notable clients include Bonet International, Pollo Tropical, Estrutura LLC and many more.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm">
                {item.title === '3D Rendering' && (
                  <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                )}
                {item.title === 'Interior Design' && (
                  <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )}
                {item.title === 'Exterior Rendering' && (
                  <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )}
                {item.title === 'Animation' && (
                  <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Professional Journey</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-semibold text-blue-600">2023</div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">Current Position</h3>
                <p className="text-gray-600">3D and Animation Art Director</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-semibold text-blue-600">2010</div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">Interior Design Practice</h3>
                <p className="text-gray-600">Established independent design practice</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-semibold text-blue-600">2003</div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold">Miami Beach Municipality</h3>
                <p className="text-gray-600">Started career in construction industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-blue-600">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can transform your ideas into reality</p>
          <Link 
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-xl"
            aria-label="Contact Patricia"
            tabIndex={0}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
