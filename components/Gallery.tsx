
import React, { useState } from 'react';
import { GALLERY } from '../constants';
import { Maximize2, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Digital SCGM Campus Gallery</h2>
          <p className="text-gray-600">Explore the vibrant life and digital facilities at Samrat Chandra Gupta Maurya Academy.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {GALLERY.map((item) => (
            <div 
              key={item.id} 
              className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group shadow-md focus-within:ring-4 focus-within:ring-blue-400 outline-none"
              onClick={() => setSelectedImage(item.url)}
              role="button"
              tabIndex={0}
              aria-label={`View larger version of ${item.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedImage(item.url); }}
            >
              <img 
                src={item.url} 
                alt={`${item.title} - SCGM Academy Gallery`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 sm:p-6 text-white text-center backdrop-blur-sm">
                <Maximize2 className="w-5 h-5 sm:w-8 sm:h-8 mb-1 sm:mb-2" aria-hidden="true" />
                <span className="font-bold text-xs sm:text-lg">{item.title}</span>
                <span className="text-[8px] sm:text-xs uppercase tracking-widest text-blue-200 mt-1">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Close enlarged image"
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view from SCGM Academy Gallery" 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-scale-up"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
