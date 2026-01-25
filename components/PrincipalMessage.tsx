
import React from 'react';
import { PRINCIPAL_NAME } from '../constants';

const PrincipalMessage: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-3xl shadow-xl overflow-hidden border border-blue-100">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 h-80 md:h-auto">
              <img 
                src="https://picsum.photos/seed/principal/600/800" 
                alt="Principal" 
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="md:w-2/3 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white/50 backdrop-blur-sm">
              <div className="mb-6">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm">A Message From The Desk Of</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2">The Principal</h2>
              </div>
              <blockquote className="text-lg sm:text-xl italic text-gray-700 mb-8 leading-relaxed relative">
                <span className="text-6xl text-blue-200 absolute -top-8 -left-4 font-serif">"</span>
                Education is not the learning of facts, but the training of the mind to think. At SCGM Academy, we strive to provide an environment where curiosity meets opportunity and every child's potential is recognized and nurtured.
                <span className="text-6xl text-blue-200 absolute -bottom-12 right-0 font-serif">"</span>
              </blockquote>
              <div className="mt-4">
                <p className="font-bold text-blue-900 text-lg sm:text-xl">{PRINCIPAL_NAME}</p>
                <p className="text-blue-600 font-medium">Principal, SCGM Academy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
