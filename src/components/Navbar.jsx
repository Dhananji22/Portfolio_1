import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white bg-gray-800 ">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="text-2xl font-bold">My Portfolio</div>
        <nav className="hidden space-x-8 md:flex">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">About</Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="focus:outline-none">
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="text-white bg-gray-800 md:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <a href="#about" className="hover:text-gray-400" onClick={handleMenuToggle}>About</a>
            <a href="#projects" className="hover:text-gray-400" onClick={handleMenuToggle}>Projects</a>
            <a href="#contact" className="hover:text-gray-400" onClick={handleMenuToggle}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
