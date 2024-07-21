import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       
       <section id="about">
       <About />
       </section>
       
       <Technologies/>
       
       <section id="projects">
       <Projects/>
       </section>
       
       <section id="contact">
       <Contacts/>
       </section>
       
       <Footer/>
    </div>
  )
}

export default App