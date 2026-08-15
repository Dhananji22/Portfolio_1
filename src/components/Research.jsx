import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  const papers = [
    {
      title: 'The impact of AI-based personalized motivation in mobile apps that promote physical activity',
      authors: 'H.V.I. Dhananji, Dr.K.P.N.Jayasena',
      year: 2026,
      summary: 'A study exploring how AI-based activity recognition and personalized motivational strategies can encourage physical activity through mobile applications. The research integrates sensor data, machine learning, and personalized interventions to improve user engagement and physical activity.'
    },
  ];

  return (
    <section id="research" className="py-12 bg-white">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Research</h2>
          <p className="mt-2 text-sm text-slate-600">Academic research project</p>
        </div>

        <div className="mt-8 space-y-4">
          {papers.map((p, i) => (
            <motion.article
              key={p.title + i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: i * 0.04 }}
              className="p-4 border rounded-lg bg-slate-50 border-slate-100"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <div className="mt-1 text-xs text-slate-600">{p.authors} • {p.year}</div>
                </div>

                <div>
                  <a href={p.link} className="text-sm text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">Read</a>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-700">{p.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;