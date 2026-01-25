
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PrincipalMessage from './components/PrincipalMessage';
import Highlights from './components/Highlights';
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Gallery from './components/Gallery';
import Faculty from './components/Faculty';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        {/* Principal Message right after the Hero section */}
        <PrincipalMessage />
        
        <Highlights />

        <section id="about" className="scroll-mt-header">
          <About />
        </section>

        <section id="academics" className="scroll-mt-header">
          <Academics />
        </section>

        <section id="admissions" className="scroll-mt-header">
          <Admissions />
        </section>

        <section id="gallery" className="scroll-mt-header">
          <Gallery />
        </section>

        <section id="faculty" className="scroll-mt-header">
          <Faculty />
        </section>

        <section id="contact" className="scroll-mt-header">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
