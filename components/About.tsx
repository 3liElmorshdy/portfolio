"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap size={20} className="text-primary" />,
    label: "ITI Graduate",
    description: "Frontend Development Track, Alexandria",
  },
  {
    icon: <Code2 size={20} className="text-primary" />,
    label: "Full-Stack Dev",
    description: "React, Next.js, Node.js, MongoDB",
  },
  {
    icon: <Briefcase size={20} className="text-primary" />,
    label: "Open to Work",
    description: "Junior / Internship positions",
  },
  {
    icon: <MapPin size={20} className="text-primary" />,
    label: "Egypt",
    description: "Available remotely",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            About
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              I&apos;m a full-stack developer and{" "}
              <span className="text-foreground font-medium">ITI graduate</span>{" "}
              specializing in building end-to-end web applications. I craft
              responsive{" "}
              <span className="text-primary font-medium">React.js / Next.js / TypeScript</span>{" "}
              front ends backed by{" "}
              <span className="text-primary font-medium">Node.js, Express, and MongoDB</span>{" "}
              REST APIs.
            </p>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              I&apos;m hands-on with{" "}
              <span className="text-foreground font-medium">
                secure authentication
              </span>{" "}
              (JWT access/refresh rotation, OAuth, role-based access),{" "}
              <span className="text-foreground font-medium">
                Stripe payment flows
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                integration testing
              </span>
              , and{" "}
              <span className="text-foreground font-medium">
                cloud deployment
              </span>
              .
            </p>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              I have a strong foundation in component-based architecture, state
              management with{" "}
              <span className="text-foreground font-medium">Redux Toolkit</span>
              , and performance optimization — with experience collaborating on
              API contracts in Agile teams.
            </p>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08 }}
                className="p-4 rounded-xl border border-border bg-surface hover:border-primary/50 transition-colors"
              >
                <div className="mb-2">{item.icon}</div>
                <p className="text-foreground font-semibold text-sm mb-1">
                  {item.label}
                </p>
                <p className="text-muted text-xs">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

