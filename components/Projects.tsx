"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projects } from "@/data/portfolio";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isFeatured = project.featured;
  const [imageError, setImageError] = useState(false);
  const isContain = project.imageFit === "contain";

  // Responsive sizes matching the 1-column mobile / 2-column desktop grid with a featured span-2
  const responsiveSizes = isFeatured
    ? "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1152px"
    : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 576px";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Fixed 16:9 Aspect Ratio Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
        {isFeatured && (
          <span className="absolute top-3 left-3 z-10 flex items-center gap-1 text-xs font-semibold text-primary bg-surface/90 backdrop-blur-md border border-primary/20 px-2.5 py-1 rounded-full shadow-sm">
            <Star size={11} /> Featured
          </span>
        )}

        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes={responsiveSizes}
            onError={() => setImageError(true)}
            className={`transition-transform duration-500 group-hover:scale-105 ${
              isContain
                ? "object-contain p-3"
                : "object-cover object-top"
            }`}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
            <div className="text-4xl mb-2">
              {project.id === "tejwal"
                ? "🗺️"
                : project.id === "learnify"
                ? "📚"
                : "🛒"}
            </div>
            <p className="text-muted text-xs font-medium">{project.title}</p>
            <p className="text-muted/60 text-[10px] mt-0.5">
              1600 × 900 thumbnail placeholder
            </p>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-foreground font-bold text-lg mb-2">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs rounded-md bg-badge text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-1.5 mb-6 flex-1">
          {project.features.map((f, i) => (
            <li key={i} className="flex gap-2 text-xs text-muted">
              <span className="text-primary mt-0.5 shrink-0">▸</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-muted hover:text-foreground hover:border-foreground text-sm transition-colors"
          >
            <GithubIcon size={15} />
            Code
          </a>
          {project.demo !== "#" ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-border/50 text-muted text-sm cursor-not-allowed">
              <ExternalLink size={15} />
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Featured Projects
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base">
            A selection of projects I&apos;ve built — from full-stack platforms
            to performance-optimized frontends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
