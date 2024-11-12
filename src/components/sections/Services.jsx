import React from 'react'
import { useNavigate } from 'react-router-dom'

import servicesData from '../../data/servicesData'

export default function Services() {
  const navigate = useNavigate()

  const handleCardClick = (serviceId) => {
    navigate(`/services/${serviceId}`)
  }

  return (
    <section className="py-10 md:py-24 bg-light-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">My Rendering Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              onClick={() => handleCardClick(service.id)}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(service.id)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:scale-105 focus:scale-105"
              tabIndex={0}
              role="button"
              aria-label={`View details for ${service.title}`}
            >
              <img 
                src={service.cardThumbnail}
                alt={service.title}
                className="w-full h-48 object-cover"
                loading='lazy'
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
