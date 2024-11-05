import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/solid';
import useEmblaCarousel from 'embla-carousel-react';
import servicesData from '../data/servicesData';

export default function ServicesPage() {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id.toString() === serviceId);
    const [emblaRef] = useEmblaCarousel({ loop: true });

    if (!service) {
        return <div className="min-h-screen flex items-center justify-center">Service not found</div>;
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div 
                className="relative h-[60vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${service.images[0]})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                        {service.title}
                    </h1>
                </div>
            </div>

            {/* Description Section */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                </p>
            </div>

            {/* Benefits Section */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Benefits</h2>
                    <div className="space-y-4">
                        {service.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Carousel */}
            <div className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Gallery</h2>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {service.images.map((image, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0">
                                    <img 
                                        src={image} 
                                        alt={`${service.title} example ${index + 1}`}
                                        className="w-full h-[400px] object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {service.faq.map((item, index) => (
                            <details 
                                key={index}
                                className="group bg-white rounded-lg shadow-sm"
                            >
                                <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
                                    <h3 className="text-lg font-medium">{item.question}</h3>
                                    <span className="transform group-open:rotate-180 transition-transform">
                                        ↓
                                    </span>
                                </summary>
                                <div className="px-6 pb-4">
                                    <p className="text-gray-700">{item.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
