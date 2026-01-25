
import React from 'react';
import { CheckCircle, Clock, BookOpen, GraduationCap } from 'lucide-react';

const Academics: React.FC = () => {
  const academicLevels = [
    { title: 'Primary Wing', range: 'Nursery to Class V', description: 'Foundation years focusing on literacy, numeracy, and creative exploration.' },
    { title: 'Middle School', range: 'Class VI to Class VIII', description: 'Transitioning to structured subject expertise and critical thinking.' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Academic Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our curriculum is designed to foster intellectual growth and provide a comprehensive learning experience across all age groups.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-16">
          {academicLevels.map((level, idx) => (
            <div key={idx} className="bg-gray-50 p-4 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-600 transition-colors">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">{level.title}</h3>
              <p className="text-[10px] sm:text-sm text-blue-600 font-semibold mb-2 sm:mb-4">{level.range}</p>
              <p className="text-[10px] sm:text-base text-gray-600 leading-tight">{level.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-blue-900 text-white p-6 sm:p-10 rounded-3xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" /> School Timings
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-between items-center border-b border-blue-800 pb-3 sm:pb-4 text-sm sm:text-base">
                <span>Summer (Mon-Sat)</span>
                <span className="font-semibold text-blue-200">7:30 AM - 1:30 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-blue-800 pb-3 sm:pb-4 text-sm sm:text-base">
                <span>Winter (Mon-Sat)</span>
                <span className="font-semibold text-blue-200">8:30 AM - 2:30 PM</span>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span>Office Hours</span>
                <span className="font-semibold text-blue-200">9:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 sm:p-10 rounded-3xl border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8 flex items-center gap-3">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" /> Curriculum Highlights
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                'NCERT Based',
                'Science Labs',
                'Digital Classrooms',
                'English Medium',
                'Assessments',
                'Extracurriculars',
                'Remedial Classes',
                'Counseling'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 sm:gap-3 text-gray-700 text-[10px] sm:text-sm">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
