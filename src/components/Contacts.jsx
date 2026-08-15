import React from 'react';
import { motion } from 'framer-motion';
import emailIcon from '../assets/email.png';
import callIcon from '../assets/call.png';
import locationIcon from '../assets/location.png';

const Contacts = () => {
  return (
    <section id="contact" className="py-12 bg-slate-50">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Get in touch</h2>
          <p className="mt-2 text-sm text-slate-600">I’m open to opportunities — let’s connect.</p>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4 }}
          className="grid gap-6 mt-8 sm:grid-cols-3"
        >
          <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
            <img src={emailIcon} alt="email" className="w-8 h-8" />
            <div>
              <div className="text-sm font-medium text-slate-900">Email</div>
              <a href="mailto:hvdisurikadhananji@gmail.com" className="text-sm text-teal-600 hover:underline">hvdisurikadhananji@gmail.com</a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
            <img src={callIcon} alt="phone" className="w-8 h-8" />
            <div>
              <div className="text-sm font-medium text-slate-900">Phone</div>
              <a href="tel:+94766901960" className="text-sm text-teal-600 hover:underline">+94 76 690 1960</a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow">
            <img src={locationIcon} alt="location" className="w-8 h-8" />
            <div>
              <div className="text-sm font-medium text-slate-900">Location</div>
              <div className="text-sm text-slate-600">Colombo, Sri Lanka</div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center mt-8">
          <a href="mailto:hvdisurikadhananji@gmail.com" className="px-5 py-2 text-sm font-medium text-white bg-teal-600 rounded-md shadow hover:bg-teal-700">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;