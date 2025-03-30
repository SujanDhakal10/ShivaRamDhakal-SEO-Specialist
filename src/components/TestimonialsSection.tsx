
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Shiva Ram transformed our online presence. Our organic traffic increased by 156% in just 4 months, and we're now ranking on the first page for all our primary keywords.",
    name: "Raghu Nath Sharma",
    position: "Marketing Director",
    company: "Raghu Tech Solutions",
    image: "/images/raghu.jpg"
  },
  {
    content: "Working with Shiva was the best decision for our e-commerce site. His technical SEO audit uncovered critical issues we were unaware of, and after implementing his recommendations, our conversion rate improved significantly.",
    name: "Adarsha Rimal",
    position: "E-Commerce Manager",
    company: "AdarshaBoutique Online",
    image: "/images/adar.jpg"
  },
  {
    content: "Shiva's expertise in local SEO helped our IT Solution to dominate the local search results. We're now getting more quality leads than ever before. Highly recommended!",
    name: "Pawan Bhandari",
    position: "Owner",
    company: "Pawan IT Solution",
    image: "/images/pawan.jpg"
  },
  {
    content: "Our content strategy was completely revamped by Shiva. He identified key gaps in our content and provided a detailed roadmap that has resulted in a 92% increase in organic search visibility.",
    name: "Sagar Gautam",
    position: "Content Strategist",
    company: "Digital Matters Agency",
    image: "/images/sagar.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about working together.
          </p>
          <div className="h-1 w-20 bg-seo-blue mx-auto mt-4"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-8 left-0 text-seo-blue opacity-30">
            <Quote size={64} />
          </div>
          
          <div className="bg-seo-lightGray rounded-xl p-8 md:p-12 relative z-10">
            <div className="min-h-[200px] flex flex-col justify-between">
              <p className="text-lg md:text-xl italic mb-8">
                {testimonials[current].content}
              </p>
              
              <div className="flex items-center">
                <Avatar className="h-14 w-14 mr-4 border-2 border-seo-blue">
                  <AvatarImage src={testimonials[current].image} alt={testimonials[current].name} />
                  <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[current].position}, {testimonials[current].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prev}
              className="rounded-full hover:bg-seo-blue hover:text-white border-seo-blue text-seo-blue"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? 'bg-seo-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-seo-blue hover:text-white border-seo-blue text-seo-blue"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
