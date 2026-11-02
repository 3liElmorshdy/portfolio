"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { experiences } from "@/data/portfolio";

const typeConfig = {
  work: {
    icon: <Briefcase size={16} />,
    color: "bg-primary",
    label: "Work",
  },
  education: {
    icon: <GraduationCap size={16} />,
    color: "bg-success",
    label: "Education",
  },
  certification: {
    icon: <Award size={16} />,
    color: "bg-primary/70",
    label: "Certification",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => {
              const config = typeConfig[exp.type];
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-14"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 top-3 w-5 h-5 rounded-full ${config.color} flex items-center justify-center text-white shadow-sm`}
                  >
                    {config.icon}
                  </div>

                  <div className="p-5 rounded-2xl border border-border bg-background hover:border-primary/40 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-foreground font-bold text-base leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-primary text-sm font-medium mt-0.5">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-muted bg-badge px-2.5 py-1 rounded-full border border-border whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted">
                          <span className="text-primary mt-0.5 shrink-0">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

