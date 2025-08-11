import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ShoppingBag, 
  User,
  Phone,
  Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mock navigation function since we don't have react-router
  const navigate = useNavigate()
  const handleNavigate = (path) => {
      setIsOpen(false);
    if(!path) return
    console.log(`Navigating to: ${path}`);
    navigate(path)
  };

  const links = [
    {name: 'Home', path: "/"},
    {name: 'About', path: "/about"},
    {name: 'Products', path: "/products"},
    {name: 'Services', path: "/services"},
    {name: 'Contact', path: "/contact"},
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+250 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@kalingatech.rw</span>
            </div>
          </div>
          <div className="text-white">
            Leading Technology Solutions in Rwanda
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-xl bg-white/95 backdrop-blur-sm' : 'shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigate('/')}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                    Kalinga Technology
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Innovation & Excellence</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {links.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigate(item.path)}
                    className="relative px-4 py-2 text-gray-700 hover:text-red-600 font-medium text-sm transition-all duration-300 rounded-lg group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-red-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium" onClick={()=> handleNavigate('/contact')}>
                Get In Touch
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t border-gray-100`}>
          <div className="px-4 py-6 space-y-3">
            {links.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigate(item.path)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2"
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
             
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg font-medium" onClick={()=> handleNavigate('/contact')}>
                           Get In Touch
              </button>
            </div>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar;