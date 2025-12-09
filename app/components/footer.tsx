'use client'

import { motion } from 'framer-motion'
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaHeart,
    FaArrowUp,
    FaYoutube,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Link from 'next/link'
import { useState } from 'react'

const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/abhibhrt', color: 'hover:text-gray-300' },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/abhibhrt', color: 'hover:text-blue-500' },
    { icon: <FaTwitter />, label: 'Twitter', href: 'https://twitter.com/abhibhrt', color: 'hover:text-sky-400' },
    { icon: <SiLeetcode />, label: 'LeetCode', href: 'https://leetcode.com/abhibhrt', color: 'hover:text-orange-500' },
    { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com/@loopsafar', color: 'hover:text-red-500' },
    { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com/loopsafar', color: 'hover:text-pink-500' },
]

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Skills', href: '/skills' },
    { label: 'Resume', href: '/resume' },
]

const techStack = [
    'React.js',
    'Next.js',
    'Node.js',
    'JavaScript',
    'Tailwind CSS',
    'MongoDB',
    'Express.js',
    'Git',
    'GitHub',
]

export default function Footer() {
    const [email, setEmail] = useState('')
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Newsletter subscription:', email)
        setEmail('')
        alert('Thanks for subscribing!')
    }

    return (
        <footer className="relative bg-gray-900 border-t border-gray-800 overflow-hidden">

            {/* BACKGROUND BLUR — STATIC */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-10 animate-pulse delay-1000" />
            </div>

            {/* GRID */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* BRAND */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Abhishek Bharti
                                </h3>
                                <p className="text-gray-400 mt-2 text-sm">
                                    Full Stack Developer specializing in modern web technologies and creating exceptional digital experiences.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaEnvelope className="text-cyan-400" />
                                    <a href="mailto:abhibharti365@gmail.com" className="hover:text-cyan-400 transition-colors">
                                        abhibharti365@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaPhone className="text-cyan-400" />
                                    <a href="tel:+919713397975" className="hover:text-cyan-400 transition-colors">
                                        +91 971339 7975
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaMapMarkerAlt className="text-cyan-400" />
                                    <span>Bhopal, Madhya Pradesh, India</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* QUICK LINKS */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* TECH STACK */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -2 }}
                                        className="cursor-default"
                                    >
                                        <span className="px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-700 hover:border-cyan-500/50 transition-all">
                                            {tech}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* NEWSLETTER */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Stay Updated</h3>
                            <p className="text-gray-400 mb-4 text-sm">
                                Subscribe to my newsletter for latest projects and tech insights.
                            </p>

                            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                    />
                                    <FaEnvelope className="absolute right-3 top-3.5 text-gray-500" />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                                >
                                    Subscribe
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>

                    {/* SOCIAL */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6"
                    >
                        <span className="text-gray-400 text-sm">
                            Connect with me on social platforms
                        </span>

                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className={`w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-lg text-gray-300 transition-all ${social.color}`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* BOTTOM */}
                    <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {currentYear} Abhishek Bharti • Made with <FaHeart className="inline text-red-500 mx-1" /> in India
                        </p>

                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-white hover:border-cyan-500 transition-all flex items-center gap-2"
                        >
                            Back to Top
                            <FaArrowUp className="text-cyan-400" />
                        </motion.button>
                    </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
            </div>
        </footer>
    )
}