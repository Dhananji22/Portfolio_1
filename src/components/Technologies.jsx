import React from 'react';
import { motion } from 'framer-motion';
import reactImg from '../assets/react.png';
import nodeImg from '../assets/Node.png';
import tailwindImg from '../assets/tailwind.png';
import jsImg from '../assets/javascript.png';
import mysqlImg from '../assets/mysql.png';
import expressImg from '../assets/express.png';
import seleniumImg from '../assets/Selenium.png';
import postmanImg from '../assets/Postman.png';
import playwriteImg from '../assets/Playwrite.png';

// import typescriptImg from '../assets/TypeScript.png';

const techs = [
  { name: 'Selenium', img: seleniumImg, alt: 'Selenium logo' },
  { name: 'Postman', img: postmanImg, alt: 'Postman logo' },
  { name: 'Playwrite', img: playwriteImg, alt: 'Playwrite logo' },
  { name: 'React', img: reactImg, alt: 'React logo' },
  { name: 'Node.js', img: nodeImg, alt: 'Node.js logo' },
  { name: 'Tailwind CSS', img: tailwindImg, alt: 'Tailwind CSS logo' },
  { name: 'JavaScript', img: jsImg, alt: 'JavaScript logo' },
  { name: 'MySQL', img: mysqlImg, alt: 'MySQL logo' },
  { name: 'Express', img: expressImg, alt: 'Express logo' },
  // { name: 'TypeScript', img: typescriptImg, alt: 'TypeScript logo' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } }),
};

const Technologies = () => {
  return (
    <section id="technologies" className="py-10 bg-slate-50">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl text-slate-900">Technologies</h2>
          <p className="mt-1 text-sm text-slate-600">Tools and technologies I work with regularly</p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 md:gap-6">
          {techs.map((t, idx) => (
            <motion.div
              key={t.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.06, zIndex: 5 }}
              className="flex flex-col items-center p-3 transition bg-white border rounded-lg shadow-sm border-slate-100 hover:shadow-md"
              role="img"
              aria-label={t.alt}
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
                <img src={t.img} alt={t.alt} className="object-contain max-w-full max-h-full" loading="lazy" />
              </div>
              <div className="mt-2 text-xs font-medium text-slate-800">{t.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">More tools and frameworks available on my resume and GitHub.</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;