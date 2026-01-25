
import React from 'react';
import { SCHOOL_ADDRESS } from '../constants';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Connect With Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2 mb-8">Get In Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg mb-1">Our Address</h4>
                  <p className="text-gray-600 leading-relaxed">{SCHOOL_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-600">+91 98765 43210 (Admissions)</p>
                  <p className="text-gray-600">+91 98765 43211 (Office)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg mb-1">Email Address</h4>
                  <p className="text-gray-600">contact@scgma.edu.in</p>
                  <p className="text-gray-600">admissions@scgma.edu.in</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-64 shadow-lg border-4 border-white">
              <iframe 
                src="https://maps.google.com/maps?q=26.85149538157592,81.41081494354982&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 transition-all outline-none text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 transition-all outline-none text-sm" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 transition-all outline-none text-sm" placeholder="Admission Query" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                <textarea rows={5} className="w-full px-5 py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 transition-all outline-none text-sm resize-none" placeholder="Type your message here..."></textarea>
              </div>
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-5 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
