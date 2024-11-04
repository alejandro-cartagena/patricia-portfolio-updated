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
          <Route path="/book-call" element={<BookCall />} />
      </Routes>
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

export default App;
