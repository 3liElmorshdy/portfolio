"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Shield,
  TestTube,
  Wrench,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={20} />,
  Server: <Server size={20} />,
  Database: <Database size={20} />,
  Shield: <Shield size={20} />,
  TestTube: <TestTube size={20} />,
  Wrench: <Wrench size={20} />,
};

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Skills
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab buttons */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 lg:w-52 shrink-0">
            {skillGroups.map((group, i) => (
              <button
                key={group.category}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap text-left transition-all ${
                  active === i
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted hover:text-foreground hover:bg-border/50"
                }`}
              >
                <span>{iconMap[group.icon]}</span>
                <span>{group.category}</span>
              </button>
            ))}
          </div>

          {/* Skills panel */}
          <div className="flex-1 min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl border border-border bg-background"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-primary">
                    {iconMap[skillGroups[active].icon]}
                  </span>
                  <h3 className="text-foreground font-bold text-lg">
                    {skillGroups[active].category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroups[active].skills.map((skill) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="px-3 py-1.5 rounded-lg text-sm bg-badge text-primary border border-primary/20 font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

