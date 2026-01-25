
import React from 'react';
import { FACULTY } from '../constants';

const Faculty: React.FC = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="faculty-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Expert Educators</span>
          <h2 id="faculty-heading" className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2 mb-4">Our Mentors at SCGM Academy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals driving the academic success and digital transformation at Samrat Chandra Gupta Maurya Academy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {FACULTY.map((teacher, idx) => (
            <div key={idx} className="group text-center">
              <div className="relative mb-4 sm:mb-6 mx-auto w-28 h-28 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 sm:border-4 border-gray-100 group-hover:border-blue-500 transition-colors shadow-lg bg-gray-50">
                <img 
                  src={teacher.image} 
                  alt={`${teacher.name} - ${teacher.subject} Expert at SCGM Academy Barabanki`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors">{teacher.name}</h3>
              <p className="text-blue-600 font-semibold text-[10px] sm:text-sm mb-1 sm:mb-2">{teacher.subject} Specialist</p>
              <p className="text-[8px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold bg-gray-100 inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                {teacher.qualification}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
