export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  featured: boolean;
  image: string;
  imageFit?: "cover" | "contain";
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "work" | "education" | "certification";
  highlights: string[];
}

export const personalInfo = {
  name: "Ali Elmorshedy",
  title: "Full-Stack Developer",
  subtitle: "React.js · Next.js · Node.js · TypeScript",
  intro:
    "I build end-to-end web applications with React, Next.js, Node.js, and MongoDB.",
  location: "Egypt",
  email: "alielmorshedy10@gmail.com",
  cvPath: "/Ali_Elmorshedy_FullStack_CV.pdf",
  github: "https://github.com/3liElmorshdy",
  linkedin: "https://www.linkedin.com/in/ali-elmorshedy-363877348/",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/3liElmorshdy",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-elmorshedy-363877348/",
    icon: "Linkedin",
  },
  {
    label: "Email",
    href: "mailto:alielmorshedy10@gmail.com",
    icon: "Mail",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Redux Toolkit",
      "React Hooks",
      "Context API",
      "React Router",
      "Framer Motion",
      "Tailwind CSS",
      "SASS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      "Node.js",
      "Express",
      "RESTful API Design",
      "JWT Authentication",
      "OAuth (Google)",
      "Role-Based Access Control",
      "Stripe Webhooks",
      "Firebase",
    ],
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: ["MongoDB (Mongoose)", "MongoDB Atlas", "Firebase", "Cloudinary"],
  },
  {
    category: "Security",
    icon: "Shield",
    skills: [
      "JWT Access/Refresh Token Rotation",
      "httpOnly Cookies",
      "Helmet",
      "Rate Limiting",
      "Input Sanitization",
      "Password & Token Hashing",
    ],
  },
  {
    category: "Testing & Debugging",
    icon: "TestTube",
    skills: ["Jest", "React Testing Library", "Chrome DevTools"],
  },
  {
    category: "Tools & Deployment",
    icon: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions (CI/CD)",
      "Vercel",
      "Render",
      "Netlify",
      "Vite",
      "Webpack",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "tejwal",
    title: "Tejwal Tour Booking Platform",
    description:
      "Full-stack, installable PWA for tour booking with secure authentication, payments, reviews, wishlist, and an admin dashboard.",
    longDescription:
      "A production-grade, full-stack PWA enabling users to discover and book tours, leave reviews, manage wishlists, and pay securely via Stripe. The platform features an admin dashboard with role-based access control and 29 integration tests.",
    tech: [
      "React 19",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    features: [
      "JWT access/refresh authentication with token rotation and reuse detection using httpOnly cookies",
      "Idempotent Stripe Checkout webhook booking flow",
      "Admin dashboard with role-based access control and 29 integration tests (Jest + Supertest)",
    ],
    github: "https://github.com/3liElmorshdy/tejwal-FrontEnd",
    demo: "https://tejwal-front-end.vercel.app/",
    featured: true,
    image: "/projects/tejwal.png",
    imageFit: "cover",
  },
  {
    id: "learnify",
    title: "Learnify E-Learning Platform",
    description:
      "E-learning application with Firebase authentication, course management, and performance-optimized loading.",
    longDescription:
      "A modern e-learning platform built with React and Firebase, featuring real-time authentication, course management, and Redux state management. Performance optimization reduced load time by 1.8 seconds (~35%).",
    tech: ["React", "Redux", "Firebase", "Tailwind CSS", "Framer Motion"],
    features: [
      "Firebase real-time authentication and course management",
      "Code splitting and lazy loading (load time reduced by ~35%)",
      "Redux for predictable global state management",
    ],
    github: "https://github.com/Saraelftah/learnify",
    demo: "https://learnify-lime.vercel.app/",
    featured: false,
    image: "/projects/learnify.png",
    imageFit: "cover",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "Fully responsive storefront with SEO optimization and performance-focused implementation.",
    longDescription:
      "A performance-focused, SEO-optimized e-commerce frontend featuring a responsive product catalog, storefront UI, and modern web performance best practices.",
    tech: ["React", "Responsive Design", "SEO"],
    features: [
      "Fully responsive product catalog and storefront UI",
      "SEO optimization with meta tags, structured data, and performance tuning",
      "Performance-focused implementation following Web Vitals best practices",
    ],
    github: "https://github.com/3liElmorshdy",
    demo: "https://ecommerce-cuf4.vercel.app/login",
    featured: false,
    image: "/projects/ecommerce.png",
    imageFit: "cover",
  },
];

export const experiences: Experience[] = [
  {
    id: "iti",
    role: "Application Developer Intern – React.js",
    organization: "Information Technology Institute (ITI), Alexandria",
    period: "Feb 2025 – Jul 2025",
    type: "work",
    highlights: [
      "Completed an intensive React-focused program covering advanced component design, state management, and modern frontend workflows",
      "Built and deployed responsive React applications in an Agile team setting",
      "Integrated RESTful APIs and implemented client-side routing with React Router",
      "Refactored UI into reusable components, reducing code redundancy by 30%",
      "Improved accessibility (WCAG) and cross-browser compatibility",
    ],
  },
  {
    id: "iti-edu",
    role: "Frontend Development Track (React, Angular, APIs)",
    organization: "Information Technology Institute (ITI)",
    period: "Completed Jul 2025",
    type: "education",
    highlights: [
      "Intensive program covering React, Angular, TypeScript, and modern API integration",
      "Hands-on projects with real-world deployment workflows",
    ],
  },
  {
    id: "route",
    role: "React.js Professional Course",
    organization: "Route Academy",
    period: "2024",
    type: "certification",
    highlights: [
      "In-depth React.js training covering hooks, state management, and performance optimization",
      "Built multiple real-world projects during the course",
    ],
  },
  {
    id: "bsc",
    role: "B.Sc. Surveying & Geographic Information Systems",
    organization: "Mansoura University",
    period: "2018 – 2023",
    type: "education",
    highlights: [
      "GPA: 3.3/4.0",
      "Graduation Project: A+ grade",
      "Strong foundation in data analysis, spatial computing, and problem-solving",
    ],
  },
];
