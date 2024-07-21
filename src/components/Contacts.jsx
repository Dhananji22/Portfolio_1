import React from 'react'
import email from '../assets/email.png'
import call from '../assets/call.png'
import location from '../assets/location.png'
import { motion } from 'framer-motion'

const Contacts = () => {
  return (
    <div className='p-10 bg-gray-500'>
      <h2 className='p-5 mt-10 text-4xl text-center text-white'>Get in Touch</h2>
      <motion.div 
       whileInView={{opacity: 1, x:0}}
       initial={{opacity: 0, x:-20}}
       transition={{ duration: 0.5}}
      className='flex flex-col justify-center p-5 space-y-5 md:flex-row md:space-y-0 md:space-x-5 '>
        
      <div className='flex justify-between p-5 space-x-3 text-white bg-gray-800 border-4 shadow-lg rounded-xl'>
        <img src={email} alt="email" className='w-auto h-10'/>
      <p>hvdisurikadhananji@gmail.com</p>
      </div>
      
      <div className='flex justify-between p-5 space-x-3 text-white bg-gray-800 border-4 shadow-lg rounded-xl'>
        <img src={call} alt="email" className='w-auto h-10'/>
      <p>+94 76 690 1960</p>
      </div>

      <div className='flex justify-between p-5 space-x-3 text-white bg-gray-800 border-4 shadow-lg rounded-xl'>
        <img src={location} alt="email" className='w-auto h-10'/>
      <p>Udugama, Galle</p>
      </div>
      
      </motion.div>

    </div>
  )
}

export default Contacts

