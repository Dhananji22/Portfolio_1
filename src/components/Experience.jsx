import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const jobs = [
    {
      company: "CodeRay Technologies Pvt Ltd",
      role: "Software Engineer (QA) Intern",
      period: "Sept 2024 — Mar 2025",
      bullets: [
        "Developed and maintained user interfaces for web and mobile applications using Flutter, Laravel Filament, and Livewire.",
        "Performed API testing and validated application functionality to identify and resolve defects.",
        "Worked on dashboards, multilingual features, and responsive UI improvements across application modules.",
      ],
    },
    {
      company: "Parallax Technologies",
      role: "QA Engineer Intern",
      period: "Apr 2026 — Present",
      bullets: [
        "Performed manual and exploratory testing across web applications, including functional, UI, responsive, and regression testing.",
        "Designed and executed test cases, documented defects, and collaborated with developers to verify fixes and improve product quality.",
        "Performed API testing using Postman and developed skills in test automation using Playwright for reliable end-to-end testing.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 bg-white">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Experience</h2>
          <p className="mt-2 text-sm text-slate-600">
            Roles, timeline, and top accomplishments
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {jobs.map((job, i) => (
            <motion.article
              key={job.company + i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: i * 0.05 }}
              className="p-5 border rounded-lg bg-slate-50 border-slate-100"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-700">
                    {job.company}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-slate-900">
                    {job.role}
                  </div>
                </div>
                <div className="text-sm text-slate-500">{job.period}</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm list-disc list-inside text-slate-700">
                {job.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
