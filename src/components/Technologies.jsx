import React from 'react'
import react from '../assets/react.png'
import Node from '../assets/Node.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import mysql from '../assets/mysql.png'
import postgreSQL from '../assets/PostgresSQL.png'
import express from '../assets/express.png'
import typescript from '../assets/TypeScript.png'
import { motion } from 'framer-motion'

const iconVarients = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration : duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className='p-5 bg-gray-300'>
        <h2 className='p-5 mt-10 text-4xl text-center'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-10 mt-8 mb-10'>
            
            <motion.div 
            variants={iconVarients(2.5)}
            initial="initial"
            animate= "animate"
            className='p-2 border-4 rounded-2xl border-neutral-800'>
                <img src={react} className='w-16 h-16'/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(3)}
            initial="initial"
            animate= "animate"
            className='p-2 border-4 rounded-2xl border-neutral-800'>
                <img src={Node} className='w-16 h-16'/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(6)}
            initial="initial"
            animate= "animate"
            className='p-2 border-4 rounded-2xl border-neutral-800'>
                <img src={javascript} className='w-16 h-16'/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(4.5)}
            initial="initial"
            animate= "animate"
            className='p-2 border-4 rounded-2xl border-neutral-800'>
                <img src={typescript} className='w-16 h-16'/>
            </motion.div>
            
            <motion.div
            variants={iconVarients(2)}
            initial="initial"
            animate= "animate"
             className='p-2 border-4 rounded-2xl border-neutral-800'>
                <img src={express} className='w-16 h-16'/>
            </motion.div>
            
            <motion.div
             variants={iconVarients(7)}
             initial="initial"
             animate= "animate"
            className='p-2 border-4 rounded-2xl border-neutral-800'>
                <img src={mysql} className='w-16 h-16'/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(4)}
            initial="initial"
            animate= "animate"
            className='p-2 border-4 rounded-2xl border-neutral-800'>
                <img src={tailwind} className='w-16 h-16'/>
            </motion.div>
            
            <motion.div 
            variants={iconVarients(2.5)}
            initial="initial"
            animate= "animate"
            className='p-2 border-4 rounded-2xl border-neutral-800'>
                <img src={postgreSQL} className='w-16 h-16'/>
            </motion.div>
           
        </div>

    </div>
  )
}

export default Technologies

