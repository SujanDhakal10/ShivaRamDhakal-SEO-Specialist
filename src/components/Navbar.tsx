
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-seo-darkBlue">
          Shiva Ram Dhakal
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-seo-blue font-medium transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="p-2 md:hidden text-foreground hover:text-seo-blue"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white w-full shadow-lg transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0 invisible'} overflow-hidden`}>
        <ul className="flex flex-col py-4">
          {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="block py-2 px-6 hover:bg-seo-lightGray hover:text-seo-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
