import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectPage from './pages/Portfolio/ProjectPage';
import About from './pages/About';
import Contact from './pages/Contact';
import BookCall from './pages/BookCall';
import ServicesPage from './pages/ServicesPage';

// ScrollToTop Component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white text-2xl rounded transition-opacity duration-500 ease-in-out shadow-md"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
          {/* Add your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<ProjectPage />} />
          <Route path="/services/:serviceId" element={<ServicesPage />} />
          <Route path="/book-call" element={<BookCall />} />
      </Routes>
      <ScrollToTop />
      <Footer />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  );
};

export default App;