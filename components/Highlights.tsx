import React from 'react';
import { HIGHLIGHTS } from '../constants';

const Highlights: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {HIGHLIGHTS.map((item, index) => (
            <div 
              key={index} 
              className="p-4 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl group"
            >
              <div className="mb-4 p-3 bg-blue-100 rounded-xl inline-block group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { 
                  className: "w-6 h-6 sm:w-8 sm:h-8 group-hover:text-white transition-colors" 
                })}
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-[10px] sm:text-base text-gray-600 leading-tight sm:leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;