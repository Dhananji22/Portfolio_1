import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <main>
        {/* Hero / intro */}
        <Hero />

        {/* About */}
        <About />

        {/* Experience timeline */}
        <Experience />

        {/* Research / papers */}
        <Research />

        {/* Certifications & education */}
        <Certifications />

        {/* Technologies / skills */}
        <Technologies />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contacts />
      </main>

      <Footer />
    </div>
  );
};

export default App;
