// components/AboutSection.tsx
'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiRedux } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import SkillCategory from './skills.home'

const skillsData = {
    languages: [
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, level: 85 },
    ],
    fundamentals: [
        { name: 'Data Structures', icon: <span>📊</span>, level: 85 },
        { name: 'Algorithms', icon: <span>⚡</span>, level: 80 },
        { name: 'System Design', icon: <span>🏗️</span>, level: 75 },
    ],
    frontend: [
        { name: 'React.js', icon: <FaReact className="text-cyan-400" />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, level: 95 },
        { name: 'Redux', icon: <SiRedux className="text-purple-500" />, level: 85 },
    ],
    backend: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 88 },
        { name: 'Express.js', icon: <SiExpress className="text-gray-400" />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 80 },
        { name: 'API Development', icon: <TbApi className="text-blue-400" />, level: 90 },
    ],
    tools: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" />, level: 85 },
        { name: 'Docker', icon: <span>🐳</span>, level: 70 },
        { name: 'VS Code', icon: <span>💻</span>, level: 95 },
        { name: 'Postman', icon: <span>📡</span>, level: 85 },
    ],
    softSkills: [
        { name: 'Problem Solving', icon: <span>🧠</span>, level: 90 },
        { name: 'Communication', icon: <span>💬</span>, level: 85 },
        { name: 'Team Work', icon: <span>🤝</span>, level: 88 },
        { name: 'Adaptability', icon: <span>🔄</span>, level: 90 },
    ]
}

export default function AboutSection() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* About Me Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700/50">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Education Badge */}
                                <motion.div
                                    initial={{ rotate: -5, scale: 0.9 }}
                                    whileInView={{ rotate: 0, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex-shrink-0"
                                >
                                    <div className="relative">
                                        <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-1">
                                            <div className="w-full h-full rounded-2xl bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-6">
                                                <div className="text-4xl mb-3">🎓</div>
                                                <div className="text-center">
                                                    <div className="text-cyan-300 font-bold">IIIT Bhopal</div>
                                                    <div className="text-sm text-gray-300 mt-1">B.Tech ECE</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                                            Grad. 2025
                                        </div>
                                    </div>
                                </motion.div>

                                {/* About Text */}
                                <div className="text-left">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="text-lg md:text-xl text-gray-300 leading-relaxed"
                                    >
                                        Full-Stack Developer with a B.Tech in Electronics and Communication Engineering from{' '}
                                        <span className="text-cyan-300 font-semibold">IIIT Bhopal</span>. Proficient in{' '}
                                        <span className="text-cyan-300">React.js</span>,{' '}
                                        <span className="text-cyan-300">JavaScript</span>,{' '}
                                        <span className="text-cyan-300">Node.js</span>,{' '}
                                        <span className="text-cyan-300">Express</span>, and{' '}
                                        <span className="text-cyan-300">MongoDB</span>, with experience in building full-stack web applications.
                                        Skilled in frontend and backend development, API integration, and modern UI/UX practices.
                                    </motion.p>

                                    {/* Stats */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                                    >
                                        {[
                                            { label: 'Projects', value: '25+', color: 'from-cyan-500 to-blue-500' },
                                            { label: 'Experience', value: '2 Years', color: 'from-purple-500 to-pink-500' },
                                            { label: 'Technologies', value: '15+', color: 'from-green-500 to-emerald-500' },
                                            { label: 'Certifications', value: '8+', color: 'from-orange-500 to-red-500' },
                                        ].map((stat, index) => (
                                            <div key={index} className="text-center">
                                                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                                    {stat.value}
                                                </div>
                                                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A comprehensive overview of my technical expertise and professional capabilities
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <SkillCategory
                            title="Languages"
                            skills={skillsData.languages}
                            icon={<div className="text-2xl">💻</div>}
                            delay={0.1}
                        />

                        <SkillCategory
                            title="Fundamentals"
                            skills={skillsData.fundamentals}
                            icon={<div className="text-2xl">📚</div>}
                            delay={0.2}
                        />

                        <SkillCategory
                            title="Front-End"
                            skills={skillsData.frontend}
                            icon={<div className="text-2xl">🎨</div>}
                            delay={0.3}
                        />

                        <SkillCategory
                            title="Back-End"
                            skills={skillsData.backend}
                            icon={null}
                            delay={0.4}
                        />

                        <SkillCategory
                            title="Tools"
                            skills={skillsData.tools}
                            icon={null}
                            delay={0.5}
                        />

                        <SkillCategory
                            title="Soft Skills"
                            skills={skillsData.softSkills}
                            icon={null}
                            delay={0.6}
                        />
                    </div>

                    {/* Tech Stack Visualization */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                    >
                        <h3 className="text-2xl font-bold text-white text-center mb-8">
                            Tech Stack <span className="text-cyan-400">Visualization</span>
                        </h3>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {[
                                { name: 'React', icon: <FaReact className="w-12 h-12 text-cyan-400" />, color: 'border-cyan-400' },
                                { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-green-500" />, color: 'border-green-500' },
                                { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-green-600" />, color: 'border-green-600' },
                                { name: 'Express', icon: <SiExpress className="w-12 h-12 text-gray-300" />, color: 'border-gray-400' },
                                { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12 text-white" />, color: 'border-white' },
                                { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-500" />, color: 'border-blue-500' },
                            ].map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className={`w-20 h-20 rounded-full border-2 ${tech.color} p-4 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm mb-2`}>
                                        {tech.icon}
                                    </div>
                                    <span className="text-white font-medium">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Resume Download Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-xl" />
                        <div className="absolute -top-6 -right-6 w-12 h-12 border-r-2 border-t-2 border-cyan-400/30 rounded-tr-xl" />
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 border-l-2 border-b-2 border-cyan-400/30 rounded-bl-xl" />
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-cyan-400/30 rounded-br-xl" />

                        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-gray-700">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Collaborate</span>
                            </h3>

                            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                                Download my resume to learn more about my experience, projects, and qualifications.
                                Let&apos;s build something amazing together!
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40"
                            >
                                <a href='https://drive.google.com/file/d/182q-15EucOEIrjEwNUadSDGwpBaGbNPo/view?usp=drive_link' className="relative z-10 flex items-center justify-center gap-3">
                                    <FaDownload className="w-5 h-5" />
                                    <span>Get Resume</span>
                                </a>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Animated border */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1 -z-10">
                                    <div className="w-full h-full rounded-full bg-gray-900"></div>
                                </div>
                            </motion.button>

                            <p className="text-gray-400 text-sm mt-6">
                                PDF Format • Updated December 2023 • Includes portfolio & contact details
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}