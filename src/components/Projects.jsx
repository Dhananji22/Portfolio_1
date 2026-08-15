import React from 'react';
import { motion } from 'framer-motion';
import sample from '../assets/sample.jpg';

const projects = [
  {
    title: 'UniAid',
    desc: 'Medical records & appointment system for a university — improves record access and scheduling.',
    tags: ['React', 'Express', 'MySQL'],
    href: 'https://github.com/Dhananji22/Capston_Mini_Project'
  },
  {
    title: 'Blogger',
    desc: 'Content platform enabling users to create and manage posts with a simple author flow.',
    tags: ['React', 'Express', 'PostgreSQL'],
    href: 'https://github.com/Dhananji22/Blogger'
  },
  {
    title: 'Hostel Registration System',
    desc: 'Community project to streamline hostel registrations and university administration tasks.',
    tags: ['TypeScript', 'Tailwind', 'MongoDB'],
    href: 'https://github.com/Amagunarathna/StudentAnnualHostelRegistration'
  },
  {
    title: 'Portfolio',
    desc: 'Personal site to showcase projects, skills, and contact details — focused on clarity and accessibility.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    href: 'https://github.com/Dhananji22/Portfolio'
  }
];

const Card = ({ p }) => (
  <motion.article
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 8 }}
    transition={{ duration: 0.36 }}
    className="overflow-hidden bg-white border rounded-lg shadow-md"
  >
    <img src={sample} alt={`${p.title} screenshot`} loading="lazy" className="object-cover w-full aspect-video" />
    <div className="p-4">
      <h3 className="text-sm font-semibold text-slate-900">{p.title}</h3>
      <p className="mt-2 text-xs text-slate-700">{p.desc}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {p.tags.map((t) => (
          <span key={t} className="px-2 py-0.5 text-xs font-medium text-teal-700 bg-teal-50 rounded">{t}</span>
        ))}
      </div>

      <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs text-indigo-600 hover:underline">View on GitHub →</a>
    </div>
  </motion.article>
);

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Selected Projects</h2>
          <p className="mt-2 text-sm text-slate-600">A curated list of recent work — highlights, tech and links.</p>
        </div>

        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;