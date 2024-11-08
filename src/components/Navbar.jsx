import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const serviceLinks = [
  {
    path: '/services/interior-rendering',
    label: 'Interior Rendering',
    id: 'interior-rendering'
  },
  {
    path: '/services/exterior-rendering',
    label: 'Exterior Rendering',
    id: 'exterior-rendering'
  },
  {
    path: '/services/3d-floor-plans',
    label: '3D Floor Plans',
    id: '3d-floor-plans'
  },
  {
    path: '/services/3d-animation',
    label: '3D Animation',
    id: '3d-animation'
  }
]

const navLinks = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '#',
    label: 'Services',
    hasDropdown: true
  },
  {
    path: '/portfolio',
    label: 'Portfolio'
  },
  {
    path: '/book-call',
    label: 'Book Call'
  },
  {
    path: '/about',
    label: 'About'
  },
  {
    path: '/contact',
    label: 'Contact'
  },
  
  // Add more navigation links as needed
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(false)
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null)
  const location = useLocation()

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleMenuToggle()
    }
  }

  // Add this helper function to check if current path is a service route
  const isServiceRoute = location.pathname.startsWith('/services/')
  
  // Add this helper function to check if a specific service is active
  const isActiveService = (servicePath) => location.pathname === servicePath

  const handleMobileServiceClick = () => {
    setMobileExpandedSection(mobileExpandedSection === 'services' ? null : 'services')
  }

  return (
    <nav className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-gray-900"
            aria-label="PJ Rendering Home"
          >
            <span className="text-blue-600">PJ</span> Renders
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label, hasDropdown }) => (
              <div key={label} className="relative group">
                <Link
                  to={hasDropdown ? '#' : path}
                  className={`transition-colors duration-200 font-medium ${
                    (hasDropdown && isServiceRoute) || location.pathname === path 
                      ? 'border-b-2 border-blue-600 text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  aria-label={label}
                  tabIndex={0}
                  onMouseEnter={() => hasDropdown && setActiveDropdown(true)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(false)}
                  aria-expanded={hasDropdown ? activeDropdown : undefined}
                  aria-haspopup={hasDropdown ? "true" : undefined}
                >
                  {label}
                </Link>
                
                {/* Update Dropdown Menu */}
                {hasDropdown && (
                  <div 
                    className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 transition-all duration-200 ${
                      activeDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setActiveDropdown(true)}
                    onMouseLeave={() => setActiveDropdown(false)}
                    role="menu"
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.id}
                        to={service.path}
                        className={`block px-4 py-2 text-sm ${
                          isActiveService(service.path)
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                        }`}
                        role="menuitem"
                        onClick={() => setActiveDropdown(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleMenuToggle}
              onKeyDown={handleKeyDown}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Update Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ path, label, hasDropdown }) => (
              <React.Fragment key={label}>
                {hasDropdown ? (
                  <>
                    <button
                      onClick={handleMobileServiceClick}
                      className={`w-full text-left px-3 py-2 font-medium flex items-center justify-between ${
                        isServiceRoute ? 'text-blue-600' : 'text-gray-600'
                      }`}
                      aria-expanded={mobileExpandedSection === 'services'}
                      aria-controls="mobile-services-menu"
                    >
                      <span>{label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          mobileExpandedSection === 'services' ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      id="mobile-services-menu"
                      className={`transition-all duration-300 space-y-1 ${
                        mobileExpandedSection === 'services' 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          className={`block px-6 py-2 text-sm ${
                            isActiveService(service.path)
                              ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false)
                            setMobileExpandedSection(null)
                          }}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={path}
                    className={`block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 ${
                      location.pathname === path ? 'border-l-4 border-blue-600 text-blue-600 bg-blue-50' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar