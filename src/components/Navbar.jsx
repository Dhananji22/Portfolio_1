import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Adjust this if you change header height
  const headerHeight = 72;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkProps = { smooth: true, duration: 500, spy: true, offset: -headerHeight + 6 };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-shadow ${
        scrolled ? 'shadow-lg' : ''
      } bg-slate-900`}
    >
      <div className="flex items-center justify-between h-full max-w-6xl px-4 mx-auto">
        <button
          onClick={() => { scroll.scrollToTop({ duration: 300 }); setOpen(false); }}
          className="text-lg font-semibold text-white"
          aria-label="Go to top"
        >
          Isurika D.
        </button>

        <nav className="items-center hidden gap-6 text-sm md:flex">
          <Link to="home" {...linkProps} className="text-slate-200 hover:text-teal-300" activeClass="text-teal-300 font-medium" onClick={() => setOpen(false)}>Home</Link>
          <Link to="about" {...linkProps} className="text-slate-200 hover:text-teal-300" activeClass="text-teal-300 font-medium" onClick={() => setOpen(false)}>About</Link>
          <Link to="projects" {...linkProps} className="text-slate-200 hover:text-teal-300" activeClass="text-teal-300 font-medium" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="contact" {...linkProps} className="text-slate-200 hover:text-teal-300" activeClass="text-teal-300 font-medium" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <div className="items-center hidden gap-3 md:flex">
          <a href="mailto:hvdisurikadhananji@gmail.com" className="px-3 py-1.5 text-sm font-medium text-teal-300 border border-teal-700 rounded-md hover:bg-teal-900/10">Email</a>
          <Link to="contact" {...linkProps} className="px-3 py-1.5 bg-teal-500 text-white rounded-md hover:bg-teal-600 text-sm font-medium">Contact</Link>
        </div>

        <button
          className="p-2 rounded-md md:hidden text-slate-200"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t md:hidden bg-slate-900/95 border-slate-800">
          <nav className="flex flex-col px-4 py-6 space-y-2">
            <Link to="home" {...linkProps} className="py-2 text-slate-100" onClick={() => setOpen(false)}>Home</Link>
            <Link to="about" {...linkProps} className="py-2 text-slate-100" onClick={() => setOpen(false)}>About</Link>
            <Link to="projects" {...linkProps} className="py-2 text-slate-100" onClick={() => setOpen(false)}>Projects</Link>
            <Link to="contact" {...linkProps} className="py-2 text-slate-100" onClick={() => setOpen(false)}>Contact</Link>

            <div className="pt-4 border-t border-slate-800">
              <a href="mailto:hvdisurikadhananji@gmail.com" className="block py-2 text-teal-300">Email</a>
              <Link to="contact" {...linkProps} className="block py-2 mt-2 text-center text-white bg-teal-500 rounded-md" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;