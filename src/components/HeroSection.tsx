
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-seo-lightGray pt-16">
      <div className="container-custom text-center md:text-left md:grid md:grid-cols-2 md:gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Boost Your Rankings, <span className="text-seo-blue">Drive More Traffic</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium">SEO That Works!</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
            Specializing in On-Page SEO, Technical SEO, Link Building, and Content Optimization 
            to help your business succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="btn-primary text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Hire Me
            </Button>
            <Button variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue hover:text-white text-lg" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="rounded-full bg-seo-blue/10 p-1 absolute -inset-4 animate-pulse"></div>
          <img 
            src="/images/b.jpg" 
            alt="Shiva Ram Dhakal - SEO Expert" 
            className="rounded-2xl shadow-xl object-cover max-h-[500px] animate-fade-in" 
          />
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hover:text-seo-blue transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
