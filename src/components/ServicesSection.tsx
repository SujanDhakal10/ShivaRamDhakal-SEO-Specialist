
import React from 'react';
import { Search, Laptop, Link, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, items }) => {
  return (
    <Card className="hover-lift border-2 border-transparent hover:border-seo-blue transition-all overflow-hidden group">
      <CardHeader className="pb-2">
        <div className="p-2 bg-seo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-seo-blue group-hover:text-white transition-all">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-seo-blue font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "On-Page SEO",
      description: "Optimize individual pages to rank higher and earn more traffic",
      icon: <Search className="w-6 h-6" />,
      items: [
        "Keyword Research & Strategy",
        "Meta Tags Optimization",
        "Content Optimization",
        "Internal Linking Structure"
      ]
    },
    {
      title: "Technical SEO",
      description: "Improve the technical aspects to increase ranking",
      icon: <Laptop className="w-6 h-6" />,
      items: [
        "Website Speed Optimization",
        "Mobile-Friendly Design",
        "Structured Data Implementation",
        "Site Architecture Improvement"
      ]
    },
    {
      title: "Off-Page SEO",
      description: "Build site authority through external signals",
      icon: <Link className="w-6 h-6" />,
      items: [
        "Strategic Link Building",
        "Content Outreach",
        "Guest Posting",
        "Social Media Integration"
      ]
    },
    {
      title: "Local SEO",
      description: "Boost visibility for location-based searches",
      icon: <MapPin className="w-6 h-6" />,
      items: [
        "Google My Business Optimization",
        "Local Citations Building",
        "Review Management",
        "Local Link Building"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-seo-lightGray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services Offered</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive SEO solutions tailored to boost your online presence and drive targeted traffic to your business.
          </p>
          <div className="h-1 w-20 bg-seo-blue mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
