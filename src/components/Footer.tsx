
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-seo-blue mb-2">Shiva Ram Dhakal</h2>
            <p className="text-gray-400">SEO Specialist</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-seo-blue transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 p-3 rounded-full bg-seo-blue/20 text-seo-blue hover:bg-seo-blue hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Shiva Ram Dhakal. All rights reserved.</p>
          <p className="mt-2">Professional SEO Services to Boost Your Online Presence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
