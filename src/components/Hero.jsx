import React from 'react'
import profile from '../assets/profile.png'
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { motion } from "framer-motion"
import CV from '../assets/CV_Isurika.pdf'

const Hero = () => {
  return (
    <section className='flex flex-col-reverse justify-between p-5 bg-gray-300 md:flex-row md:px-32 md:py-20'>
      <div className='mt-10 md:text-left md:w-1/2'>
        <h3 className='p-2 text-xl md:text-2xl'>Hi, myself</h3>
        <motion.h1 
         whileInView={{opacity: 1, x:0}}
         initial={{opacity: 0, x:-20}}
         transition={{ duration: 0.5}}
        className='p-2 text-3xl md:text-6xl'>ISURIKA DHANANJI</motion.h1>
        <h3 className='py-3 text-xl md:text-2xl'>And I'm a</h3>
        <h2 className='p-2 text-2xl md:text-4xl'>Full-stack developer</h2>
        <p className='p-3'>Motivated software engineering intern with a passion for technology and a dedication to delivering innovative solutions. Proficient in multiple programming languages and skilled in problem-solving. Eager to leverage my expertise to contribute effectively and make a meaningful impact on projects. </p>
      

      <div className="flex py-4 mb-6 space-x-4 md:space-x-7">
  <a href="https://web.facebook.com/isurika.dhananji/" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="text-2xl text-gray-700 hover:text-gray-900" />
  </a>
  <a href="https://github.com/Dhananji22" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
  </a>
  <a href="https://www.linkedin.com/in/isurika-dhananji-06037b224/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-2xl text-gray-700 hover:text-gray-900" />
  </a>
  <a href="https://www.instagram.com/isu_dhananji/?hl=en" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900" />
  </a>
</div>
<a href={CV} download>
<button className='px-4 py-2 text-white bg-gray-800 rounded hover:bg-blue-600'>Download CV</button>
</a>
</div>


      <div className='flex justify-center md:w-1/2 md:justify-end'>
        <motion.img 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:20}}
        transition={{ duration: 0.5}}
        src={profile} className='mt-10 md:px-20 md:h-auto md:w-auto'/>
        
      </div>
  </section>
  )
}

export default Hero

