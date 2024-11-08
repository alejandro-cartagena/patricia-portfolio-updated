import React from 'react'
import { Link } from 'react-router-dom';

export default function Bookcall() {
  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Turn Your Visions Into Reality?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Book a call with me today to discuss your project and see how I can bring your vision to life with stunning 3D renderings!
        </p>
        <Link
          to="/book-call"
          className="inline-flex items-center justify-center px-8 py-4 text-2xl font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          tabIndex={0}
          aria-label="Schedule a consultation call"
          role="button"
        >
          Book a Call
        </Link>
      </div>
    </section>
  )
}
