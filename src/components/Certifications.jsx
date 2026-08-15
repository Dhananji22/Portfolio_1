import React from 'react';
import { motion } from 'framer-motion';
import CV from '../assets/CV_Isurika.pdf'; // placeholder link to your CV

const Certifications = () => {
  const certs = [
    {
      title: 'ISTQB Foundation Level (Sample)',
      issuer: 'ISTQB',
      date: 'Mar 2022',
      link: '#' // replace with actual PDF or credential link
    },
    {
      title: 'Automation with Selenium (Sample)',
      issuer: 'Coursera',
      date: 'Nov 2021',
      link: '#'
    },
    {
      title: 'API Testing & Postman (Sample)',
      issuer: 'Postman Academy',
      date: 'Aug 2021',
      link: '#'
    }
  ];

  const education = {
    degree: 'BSc (Hons) in Computing and Information Systems',
    school: 'Sabaragamuwa University of Sri Lanka',
    period: '2021 — 2026',
    transcript: '#' // optional PDF link
  };

  return (
    <section id="certifications" className="py-12 bg-slate-50">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Certifications & Education</h2>
          <p className="mt-2 text-sm text-slate-600">Certifications, badges and academic background</p>
        </div>

        <div className="grid gap-6 mt-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.36 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-medium text-slate-900">Certifications</h3>

            <div className="space-y-3">
              {certs.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{c.title}</div>
                    <div className="text-xs text-slate-600">{c.issuer} • {c.date}</div>
                  </div>
                  <div className="text-sm">
                    <a href={c.link || CV} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">View</a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.36 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-medium text-slate-900">Education</h3>

            <div className="p-4 bg-white border rounded-lg shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{education.degree}</div>
              <div className="text-xs text-slate-600">{education.school} • {education.period}</div>
              <div className="mt-3 text-xs text-slate-700">
                Relevant coursework: Software Testing, Databases, Web Development. Thesis: "Improving automated test reliability in CI pipelines" (sample).
              </div>

              <div className="mt-3">
                <a href={education.transcript} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-600 hover:underline">Download transcript</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;