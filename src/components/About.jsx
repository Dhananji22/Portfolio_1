import React from 'react';
import img from '../assets/img.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl px-6 py-12 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">About</h2>
          <p className="mt-2 text-sm text-slate-600">A concise summary of who I am and what I do.</p>
        </div>

        <div className="grid items-center gap-8 mt-8 md:grid-cols-2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.45 }}
            className="flex justify-center"
          >
            <img src={img} alt="Profile" className="object-cover w-56 h-56 shadow-md rounded-xl" />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.45, delay: 0.03 }}
            className="text-sm text-slate-700"
          >
            <p>
              I’m a QA Engineer passionate about software quality, manual testing, API testing, and test automation. With a background
              in software development and a strong attention to detail, I enjoy identifying issues early, improving product reliability,
              and helping teams deliver better user experiences.
            </p>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-slate-900">What I do</h3>
              <ul className="mt-2 space-y-2 text-slate-700">
                <li>• Manual & exploratory testing — uncover user-impacting defects.</li>
                <li>• API testing and validation — ensure backend reliability and contract correctness.</li>
                <li>• Test automation — build maintainable automated checks to prevent regressions.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-slate-900">Working style</h3>
              <p className="text-slate-700">I prioritize clear test plans, reproducible reports, and close collaboration with developers to improve testability.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;