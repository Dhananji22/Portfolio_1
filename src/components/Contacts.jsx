import React from 'react'
import email from '../assets/email.png'
import call from '../assets/call.png'
import location from '../assets/location.png'
import { motion } from 'framer-motion'

const Contacts = () => {
  return (
    <div className='p-10 bg-gray-500'>
      <h2 className='p-5 mt-10 text-2xl text-center text-white md:text-4xl'>Get in Touch</h2>
      <motion.div 
       whileInView={{opacity: 1, x:0}}
       initial={{opacity: 0, x:-20}}
       transition={{ duration: 0.5}}
      className='flex flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5'>
        
      <div className='flex items-center p-5 space-x-3 text-white bg-gray-800 border-4 shadow-lg rounded-xl'>
        <img src={email} alt="email" className='w-7 h-7 md:h-10 md:w-auto'/>
      <p className='break-words'>hvdisurikadhananji@gmail.com</p>
      </div>
      
      <div className='flex items-center p-5 space-x-3 text-white bg-gray-800 border-4 shadow-lg rounded-xl'>
        <img src={call} alt="email" className='w-8 h-8 md:h-10 md:w-auto'/>
      <p>+94 76 690 1960</p>
      </div>

      <div className='flex items-center p-5 space-x-3 text-white bg-gray-800 border-4 shadow-lg rounded-xl'>
        <img src={location} alt="email" className='w-8 h-8 md:h-10 md:w-auto'/>
      <p>Udugama, Galle</p>
      </div>
      
      </motion.div>

    </div>
  )
}

export default Contacts

