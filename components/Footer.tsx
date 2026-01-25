
import React from 'react';
import { SCHOOL_NAME, SCHOOL_LOGO, SCHOOL_ADDRESS } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpCircle, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={SCHOOL_LOGO} alt="Digital SCGM Logo" className="h-12 w-auto brightness-200" />
              <span className="text-xl font-bold">Digital SCGM</span>
            </div>
            <p className="text-blue-100/60 leading-relaxed mb-8">
              Official website of <strong>Samrat Chandra Gupta Maurya Academy</strong>. Empowering leaders through digital literacy and academic excellence in Ahmadpur, Barabanki.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Follow Digital SCGM on Facebook">
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Follow Digital SCGM on Instagram">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Follow Digital SCGM on Twitter">
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Follow Digital SCGM on LinkedIn">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Quick Navigation</h4>
            <ul className="space-y-4 text-blue-100/60">
              <li><a href="#about" className="hover:text-white transition-colors">Our History</a></li>
              <li><a href="#academics" className="hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#admissions" className="hover:text-white transition-colors">Enroll Today</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Campus Tour</a></li>
              <li><a href="#faculty" className="hover:text-white transition-colors">Our Mentors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Resources</h4>
            <ul className="space-y-4 text-blue-100/60">
              <li><a href="#" className="hover:text-white transition-colors">Online Fee Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Learning Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Downloads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Opportunities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Contact Details</h4>
            <address className="not-italic text-blue-100/60 space-y-4">
              <p className="flex items-start gap-3">
                <span className="font-bold text-white uppercase text-[10px] mt-1">Address</span>
                {SCHOOL_ADDRESS}
              </p>
              <p className="flex items-start gap-3">
                <span className="font-bold text-white uppercase text-[10px] mt-1">Phone</span>
                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
              </p>
              <p className="flex items-start gap-3">
                <span className="font-bold text-white uppercase text-[10px] mt-1">Email</span>
                <a href="mailto:info@scgma.edu.in" className="hover:text-white">info@scgma.edu.in</a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-blue-100/40 text-sm">
              © {new Date().getFullYear()} <strong>Samrat Chandra Gupta Maurya Academy</strong> (Digital SCGM). Ahmadpur, Barabanki.
            </p>
            <p className="text-blue-100/60 text-sm flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-400" />
              <span>Created by <span className="text-blue-400 font-bold hover:text-white transition-colors cursor-default">Sumit Maurya</span></span>
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-xs text-blue-100/40">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <button onClick={scrollToTop} className="flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-all outline-none focus:ring-2 focus:ring-blue-400 rounded p-1">
              Back to top <ArrowUpCircle className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
