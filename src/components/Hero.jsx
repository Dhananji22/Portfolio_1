import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import CV from "../assets/CV_Isurika.pdf";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    // top padding so hero content is not hidden under the fixed dark navbar
    <section
      id="home"
      className="pt-[88px] pb-12 bg-gradient-to-br from-teal-50 via-white to-indigo-50 min-h-[72vh]"
    >
      <div className="grid items-center max-w-6xl gap-8 px-6 py-10 mx-auto md:grid-cols-2">
        {/* Left column: copy */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold text-teal-700 bg-teal-100 rounded-full shadow-sm">
            QA Engineer
          </div>

          <motion.h1
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold leading-tight md:text-5xl text-slate-900"
          >
            Isurika Dhananji
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-xl text-sm md:text-base text-slate-700"
          >
            QA Engineer passionate about quality, automation, and better user
            experiences. Experienced in manual testing, API validation, and
            building maintainable test automation that helps teams ship with
            confidence.
          </motion.p>

          <div className="flex flex-wrap items-center gap-3 mt-3">
            <a
              href={CV}
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-slate-900 hover:bg-slate-800"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-md border-slate-900 text-slate-900 hover:bg-slate-50"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-3 mt-4 text-slate-700">
            <a
              href="https://github.com/Dhananji22"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 hover:text-slate-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/isurika-dhananji-06037b224/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 hover:text-slate-900" />
            </a>
            <a
              href="https://web.facebook.com/isurika.dhananji/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5 hover:text-slate-900" />
            </a>
            <a
              href="https://www.instagram.com/isu_dhananji/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 hover:text-slate-900" />
            </a>
          </div>
        </div>

        {/* Right column: profile card — lighter card to contrast with dark navbar */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-[500px] md:w-[400px] p-4 rounded-2xl bg-white shadow-xl ring-1 ring-slate-100">
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-indigo-500 opacity-10" />
              <img
                src={profile}
                alt="Isurika Dhananji"
                className="object-cover w-full rounded-lg h-100"
                style={{ objectPosition: "center 10%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
