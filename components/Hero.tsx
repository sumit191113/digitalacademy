
import React from 'react';
import { SCHOOL_NAME } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/schoolhero/1920/1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl fade-in-up">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-blue-400">{SCHOOL_NAME}</span>
          </h1>
          <p className="text-xl text-blue-50 mb-10 max-w-2xl leading-relaxed">
            Leading the educational revolution in Barabanki. <strong>Digital SCGM</strong> offers a modern approach to learning, combining traditional values with advanced digital services for students and the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href="#admissions" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/20 text-center"
              aria-label="Apply for Admissions at SCGM Academy"
            >
              Start Admission Process
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg text-center"
              aria-label="Contact Digital SCGM for queries"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
