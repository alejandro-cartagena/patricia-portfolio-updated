import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion

// Sections
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Gallery from '../components/sections/Gallery';
import Benefits from '../components/sections/Benefits';
import Bookcall from '../components/sections/Bookcall';

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const benefitsRef = useRef(null);
  const bookcallRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isGalleryInView = useInView(galleryRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isBookcallInView = useInView(bookcallRef, { once: true });

  return (
    <>
        <motion.div 
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : 20 }} 
            transition={{ duration: 0.5 }}
        >
            <Hero />
        </motion.div>
        <motion.div 
            ref={servicesRef}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: isServicesInView ? 1 : 0, y: isServicesInView ? 0 : 20 }} 
            transition={{ duration: 0.5, delay: 0.1 }} // Staggered effect
        >
            <Services />
        </motion.div>
        <motion.div 
            ref={galleryRef}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: isGalleryInView ? 1 : 0, y: isGalleryInView ? 0 : 20 }} 
            transition={{ duration: 0.5, delay: 0.2 }} // Staggered effect
        >
            <Gallery />
        </motion.div>
        <motion.div 
            ref={benefitsRef}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: isBenefitsInView ? 1 : 0, y: isBenefitsInView ? 0 : 20 }} 
            transition={{ duration: 0.5, delay: 0.3 }} // Staggered effect
        >
            <Benefits />
        </motion.div>
        <motion.div 
            ref={bookcallRef}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: isBookcallInView ? 1 : 0, y: isBookcallInView ? 0 : 20 }} 
            transition={{ duration: 0.5, delay: 0.4 }} // Staggered effect
        >
            <Bookcall />
        </motion.div>
    </>
  );
}