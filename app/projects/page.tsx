'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi'

// --- TYPES ---
interface ProjectImage {
  url: string
}

interface Project {
  title: string
  description: string
  date: string
  tags: string[]
  github: string
  visit: string
  images?: ProjectImage[]
}

// --- STATIC PROJECT DATA ---
const PROJECTS_DATA: Project[] = [
  {
    title: 'Portfolio Platform',
    description:
      'A modern developer portfolio with dark mode, animations, and CMS-ready structure.',
    date: '2024',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    visit: 'https://yourportfolio.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      },
    ],
  },
  {
    title: 'SaaS Dashboard',
    description:
      'Enterprise-grade dashboard with role-based access, charts, and analytics.',
    date: '2024',
    tags: ['React', 'TypeScript', 'Private Repo'],
    github: 'https://github.com/yourusername/private',
    visit: '#',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      },
    ],
  },
  {
    title: 'E-Commerce UI',
    description:
      'High-performance storefront with clean UX and conversion-focused layout.',
    date: '2023',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    github: 'https://github.com/yourusername/ecommerce',
    visit: 'https://shopdemo.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      },
    ],
  },
]

export default function Projects() {
  return (
    <section
      className="relative bg-slate-950 py-24 pt-30 px-6 overflow-hidden"
      id="Projects"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-2">
          <div className="flex items-center gap-2 text-blue-500 font-mono text-[10px] tracking-[0.3em] uppercase">
            <span className="h-[1px] w-8 bg-blue-500" />
            Deployment_Log
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tighter uppercase">
            Featured <span className="text-slate-500">Modules</span>
          </h2>
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900/30 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 rounded-lg overflow-hidden"
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-slate-800 bg-slate-900/50">
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
        </div>
        <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">
          ID: 00{index + 1}
        </span>
      </div>

      {/* Image */}
      <div className="relative aspect-video overflow-hidden border-b border-slate-800">
        <img
          src={project.images?.[0]?.url}
          alt={project.title}
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
          <a
            href={project.github}
            target="_blank"
            className="p-3 bg-white text-slate-950 hover:bg-blue-500 hover:text-white transition-all rounded-sm"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={project.visit}
            target="_blank"
            className="p-3 bg-white text-slate-950 hover:bg-blue-500 hover:text-white transition-all rounded-sm"
          >
            <FiExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase">
          <FiCalendar className="text-blue-500" />
          {project.date}
        </div>

        <h3 className="text-xl font-bold text-white uppercase group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="pt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => {
            const isPrivate = tag.toLowerCase().includes('private')
            return (
              <span
                key={i}
                className={`text-[9px] font-mono uppercase tracking-widest px-2 py-1 border ${
                  isPrivate
                    ? 'border-red-900/50 text-red-500 bg-red-950/20'
                    : 'border-slate-800 text-slate-500 bg-slate-800/30'
                }`}
              >
                {tag}
              </span>
            )
          })}
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}
