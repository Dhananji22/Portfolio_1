import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl px-6 py-8 mx-auto md:flex md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <button
            onClick={() => scroll.scrollToTop({ duration: 300 })}
            className="text-lg font-semibold text-white hover:opacity-90"
            aria-label="Back to top"
          >
            Isurika D.
          </button>
          <div className="mt-2 text-sm text-slate-400">QA Engineer — Quality · Automation · Reliability</div>
        </div>

        <nav className="flex items-center justify-center gap-4 mb-4 text-sm md:mb-0">
          <a href="#home" className="hover:text-teal-300">Home</a>
          <a href="#about" className="hover:text-teal-300">About</a>
          <a href="#projects" className="hover:text-teal-300">Projects</a>
          <a href="#contact" className="hover:text-teal-300">Contact</a>
        </nav>

        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/Dhananji22" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-white">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/isurika-dhananji-06037b224/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-white">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://web.facebook.com/isurika.dhananji/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-300 hover:text-white">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/isu_dhananji/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-300 hover:text-white">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl px-6 py-3 mx-auto text-sm text-center text-slate-500">
          © {year} Isurika Dhananji — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;