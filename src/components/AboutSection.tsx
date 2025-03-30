
import React from 'react';
import { CheckCircle, Database, Code, LineChart, BrainCircuit } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Data Analysis', icon: <Database className="w-5 h-5 text-seo-blue" /> },
    { name: 'Problem Solving', icon: <BrainCircuit className="w-5 h-5 text-seo-blue" /> },
    { name: 'Strategic Thinking', icon: <LineChart className="w-5 h-5 text-seo-blue" /> },
    { name: 'HTML', icon: <Code className="w-5 h-5 text-seo-blue" /> },
    { name: 'CSS', icon: <Code className="w-5 h-5 text-seo-blue" /> },
    { name: 'JavaScript', icon: <Code className="w-5 h-5 text-seo-blue" /> }
  ];

  const tools = [
    'Google Search Console', 
    'Google Analytics', 
    'Ahrefs', 
    'SEMrush', 
    'Screaming Frog', 
    'SurferSEO'
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-seo-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="p-8 bg-white">
                  <h3 className="text-xl font-semibold mb-4 text-seo-darkBlue">Professional Experience</h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    I'm Shiva Ram Dhakal with best experience in Search Engine Optimization, I help businesses improve their online visibility, 
                    increase organic traffic, and achieve higher rankings in search engines. My data-driven approach ensures 
                    measurable results and sustainable growth for your business.
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-r from-seo-lightGray to-gray-50">
                  <h3 className="text-xl font-semibold mb-4 text-seo-darkBlue flex items-center">
                    <LineChart className="w-5 h-5 mr-2 text-seo-blue" /> Professional Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        {skill.icon}
                        <span className="ml-2 font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-seo-darkBlue flex items-center">
                  <Database className="w-5 h-5 mr-2 text-seo-blue" /> SEO Tools Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center p-2 hover:bg-seo-lightGray rounded-md transition-colors">
                      <CheckCircle className="w-4 h-4 mr-2 text-seo-blue" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-seo-blue/10 to-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-seo-darkBlue">My Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 text-seo-blue" />
                    <span>Data-driven strategies for measurable results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 text-seo-blue" />
                    <span>Custom solutions tailored to each business</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 text-seo-blue" />
                    <span>Transparent reporting and communication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mt-1 mr-2 text-seo-blue" />
                    <span>Continuous optimization for long-term success</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
