import React from 'react';
import img from '../assets/img.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='bg-gray-400 border-b'>
      <h2 className='text-4xl text-center py-14'>About me</h2>
      <div className='flex flex-col p-5 md:flex-row md:justify-between'>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x:-20}}
        transition={{ duration: 0.5}}
        className='flex justify-center mb-5 md:w-1/2 md:mb-0'>
          <img src={img} className='w-auto border-4 h-96 rounded-xl' alt='Profile' />
        </motion.div>
        
        <motion.div
         whileInView={{opacity: 1, x:0}}
         initial={{opacity: 0, x:20}}
         transition={{ duration: 0.5}} 
        className='flex justify-center pr-10 md:w-1/2'>
          <p className=''>
          I am a dedicated and passionate QA Engineer Intern with a strong foundation in computer science and a keen interest in ensuring software quality. Currently pursuing my BSc(Hons) in Computing and Information Systems, I have developed a solid understanding of software testing principles and methodologies. My experience includes working on various projects where I have honed my skills in  automated testing, bug tracking, and test case design. <br/><br />
          
          I am particularly skilled in using tools like Selenium, JIRA, and Postman, and have a strong understanding of the software development lifecycle (SDLC) and agile methodologies. My goal is to contribute to the delivery of high-quality software solutions by ensuring that every product meets the highest standards of performance and reliability.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
