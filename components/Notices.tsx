
import React from 'react';
import { NOTICES } from '../constants';
import { Bell, Calendar as CalendarIcon } from 'lucide-react';

const Notices: React.FC = () => {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Urgent': return 'bg-red-100 text-red-600';
      case 'Holiday': return 'bg-orange-100 text-orange-600';
      case 'Event': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Notice Board</h2>
            <p className="text-gray-600">Keep up to date with the latest announcements, schedules, and events at Samrat Chandra Gupta Maurya Academy.</p>
          </div>
          <button className="text-blue-600 font-bold hover:underline flex items-center gap-2">
            View All Announcements <Bell className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {NOTICES.map((notice) => (
            <div key={notice.id} className="bg-gray-50 border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-2">
                <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider ${getTagColor(notice.tag)}`}>
                  {notice.tag}
                </span>
                <div className="text-gray-400 flex items-center gap-1 text-[8px] sm:text-xs">
                  <CalendarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {notice.date}
                </div>
              </div>
              <h3 className="text-xs sm:text-xl font-bold text-blue-900 mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                {notice.title}
              </h3>
              <p className="text-gray-600 text-[10px] sm:text-sm leading-tight sm:leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                {notice.description}
              </p>
              <button className="text-blue-900 font-bold text-[8px] sm:text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notices;
