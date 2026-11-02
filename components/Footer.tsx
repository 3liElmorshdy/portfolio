"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo, socialLinks } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Github: <GithubIcon size={18} />,
  Linkedin: <LinkedinIcon size={18} />,
  Mail: <Mail size={18} />,
};

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-xl font-bold text-primary mb-1">{`<AE />`}</p>
            <p className="text-muted text-sm">{personalInfo.title}</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.icon !== "Mail" ? "_blank" : undefined}
                rel={link.icon !== "Mail" ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="p-2.5 rounded-xl border border-border text-muted hover:text-primary hover:border-primary transition-colors"
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-primary mx-0.5" /> using
            Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
