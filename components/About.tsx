
import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <article>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Experience Digital Excellence</span>
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2 mb-6">About Digital SCGM Academy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>Samrat Chandra Gupta Maurya Academy (SCGM)</strong> is a premier educational institution located in Ahmadpur, Barabanki. Recognized as <strong>Digital SCGM</strong>, we provide top-tier academic services, digital solutions, and innovative learning platforms for startups, individuals, and the next generation of students.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to bridge the digital divide in rural and urban Barabanki by providing a curriculum that is both technologically advanced and rooted in core human values. Whether you are looking for the best school in Ahmadpur or a modern digital learning partner, SCGM Academy is your destination.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-3" aria-hidden="true" />
                <h4 className="font-bold text-blue-900 text-sm sm:text-base">Our Mission</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Nurturing potential through digital innovation.</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-3" aria-hidden="true" />
                <h4 className="font-bold text-blue-900 text-sm sm:text-base">Our Vision</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Leading Barabanki's digital educational path.</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-3" aria-hidden="true" />
                <h4 className="font-bold text-blue-900 text-sm sm:text-base">Core Values</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">Integrity, Discipline, and Digital Literacy.</p>
              </div>
            </div>
          </article>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/school3/600/400" 
              alt="Exterior of Samrat Chandra Gupta Maurya Academy Barabanki" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-100 rounded-2xl -z-0" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
