import React from 'react'
import sample from '../assets/sample.jpg'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section className='flex flex-col bg-gray-300 py-14'>
        <h2 className='py-12 text-4xl text-center y-6'>Projects</h2>
        <div className='flex flex-wrap justify-center gap-20 p-5 m-5' >

        {/* Medical records managent system */}
        <motion.div
          whileInView={{opacity: 1, x:0}}
          initial={{opacity: 0, x:-20}}
          transition={{ duration: 0.5}}
         className="relative max-w-4xl h-72 w-96">
        <img
          src={sample}
          alt="Project"
          className="object-cover w-full h-auto opacity-70"
        />
        <div className="absolute inset-0 flex items-center transition-colors duration-300 bg-black bg-opacity-50 rounded-lg shadow-md hover:bg-gray-800">
          <div className="p-8 text-white">
            <h2 className="mb-4 text-xl font-bold">UniAid</h2>
            <p className="text-xs">
            Created a medical records management system for the university with online appointment feature.
            </p>
            < a href='https://github.com/Dhananji22/Capston_Mini_Project' className='flex py-5 text-xs hover:text-red-200'>Visit GitHub</a>
            <div className='flex text-xs'>
              <ul className='flex justify-between space-x-3 '>
                <li className='p-1 duration-100 border hover:bg-slate-600'>React</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>MySQL</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>Express</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

       {/* Blogger*/}
       <motion.div 
       whileInView={{opacity: 1, x:0}}
       initial={{opacity: 0, x:-20}}
       transition={{ duration: 0.5}}
       className="relative max-w-4xl h-72 w-96">
        <img
          src={sample}
          alt="Project"
          className="object-cover w-full h-auto opacity-70"
        />
        <div className="absolute inset-0 flex items-center transition-colors duration-300 bg-black bg-opacity-50 rounded-lg shadow-md hover:bg-gray-800">
          <div className="p-8 text-white">
            <h2 className="mb-4 text-xl font-bold">Blogger</h2>
            <p className="text-xs">
            Created a blogger website facilitating the upload of new posts.
            </p>
            < a href='https://github.com/Dhananji22/Blogger' className='flex py-5 text-xs hover:text-red-200'>Visit GitHub</a>
            <div className='flex text-xs'>
              <ul className='flex justify-between space-x-3'>
                <li className='p-1 duration-100 border hover:bg-slate-600'>React</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>PostgreSQL</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>Express</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hostel Registration System */}
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x:-20}}
      transition={{ duration: 0.5}}
      className="relative max-w-4xl h-72 w-96">
        <img
          src={sample}
          alt="Project"
          className="object-cover w-full h-auto opacity-70"
        />
        <div className="absolute inset-0 flex items-center transition-colors duration-300 bg-black bg-opacity-50 rounded-lg shadow-md hover:bg-gray-800">
          <div className="p-8 text-white">
            <h2 className="mb-4 text-xl font-bold">Hostel Registration System</h2>
            <p className="text-xs">
            Creating a hostel management system for the university as the community project.
            </p>
            < a href='https://github.com/Amagunarathna/StudentAnnualHostelRegistration' className='flex py-5 text-xs hover:text-red-200'>Visit GitHub</a>
            <div className='flex text-xs'>
              <ul className='flex justify-between space-x-3'>
                <li className='p-1 duration-100 border hover:bg-slate-600'>Typescript</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>Tailwind CSS</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Linfield */}
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x:-20}}
      transition={{ duration: 0.5}}
      className="relative max-w-4xl h-72 w-96">
        <img
          src={sample}
          alt="Project"
          className="object-cover w-full h-auto opacity-70"
        />
        <div className="absolute inset-0 flex items-center transition-colors duration-300 bg-black bg-opacity-50 rounded-lg shadow-md hover:bg-gray-800">
          <div className="p-8 text-white">
            <h2 className="mb-4 text-xl font-bold">Linfield</h2>
            <p className="text-xs">
            Created a frontend for an IT institute (an assumption) in Sri Lanka.

            </p>
            < a href='https://github.com/Dhananji22/web-site-1' className='flex py-5 text-xs hover:text-red-200'>Visit GitHub</a>
            <div className='flex text-xs'>
              <ul className='flex justify-between space-x-3'>
                <li className='p-1 duration-100 border hover:bg-slate-600'>HTML</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Portfolio */}
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x:-20}}
      transition={{ duration: 0.5}}
      className="relative max-w-4xl h-72 w-96">
        <img
          src={sample}
          alt="Project"
          className="object-cover w-full h-auto opacity-70"
        />
        <div className="absolute inset-0 flex items-center transition-colors duration-300 bg-black bg-opacity-50 rounded-lg shadow-md hover:bg-gray-800">
          <div className="p-8 text-white">
            <h2 className="mb-4 text-xl font-bold">Portfolio</h2>
            <p className="text-xs">
              Created personal portfolio website with showcasing my pragramming ability.
            </p>
            < a href='https://github.com/Dhananji22/Portfolio' className='flex py-5 text-xs hover:text-red-200'>Visit GitHub</a>
            <div className='flex text-xs'>
              <ul className='flex justify-between space-x-3'>
                <li className='p-1 duration-100 border hover:bg-slate-600'>React</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>Tailwind CSS</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>Framer Motion</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

       {/* Linfield
       <motion.div 
       whileInView={{opacity: 1, x:0}}
       initial={{opacity: 0, x:-50}}
       transition={{ duration: 0.5}}
       className="relative max-w-4xl h-72 w-96">
        <img
          src={sample}
          alt="Project"
          className="object-cover w-full h-auto opacity-70"
        />
        <div className="absolute inset-0 flex items-center transition-colors duration-300 bg-black bg-opacity-50 rounded-lg shadow-md hover:bg-gray-800">
          <div className="p-8 text-white">
            <h2 className="mb-4 text-xl font-bold">Project Title</h2>
            <p className="text-xs">
              This is a description of the project. It explains the purpose and details of the project, including any technologies used and challenges faced. 
            </p>
            < a href='#' className='flex py-5 text-xs hover:text-red-200'>Visit GitHub</a>
            <div className='flex text-xs'>
              <ul className='flex justify-between space-x-3'>
                <li className='p-1 duration-100 border hover:bg-slate-600'>React</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>MySQL</li>
                <li className='p-1 duration-100 border hover:bg-slate-600'>Express</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div> */}



        </div>
        
    </section>
  )
}

export default Projects