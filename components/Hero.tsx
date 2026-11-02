"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown, Download, Eye } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo, socialLinks } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubIcon size={20} />,
  Linkedin: <LinkedinIcon size={20} />,
  Mail: <Mail size={20} />,
};

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/8 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-primary text-sm font-mono mb-4 px-3 py-1 rounded-full border border-primary/30 bg-badge"
          >
            👋 Available for opportunities
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 leading-tight tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-6"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.intro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-colors w-full sm:w-auto justify-center"
          >
            <Eye size={18} />
            View Projects
          </button>
        
            <a
            href={personalInfo.cvPath}
            download="Ali_Elmorshedy_FullStack_CV.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors w-full sm:w-auto justify-center"
          >
            <Download size={18} />
            Download CV
          </a>

          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors w-full sm:w-auto justify-center"
          >
            <Mail size={18} />
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.icon !== "Mail" ? "_blank" : undefined}
              rel={link.icon !== "Mail" ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-xl border border-border text-muted hover:text-primary hover:border-primary transition-colors"
            >
              {iconMap[link.icon]}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <ArrowDown size={20} className="text-muted" />
        </motion.div>
      </div>
    </section>
  );
}
