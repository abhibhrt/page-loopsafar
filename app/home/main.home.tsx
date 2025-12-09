'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import TESTAPI from '../components/testAPI'

export default function HomePage() {
    const [cursorText, setCursorText] = useState('')
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const texts = ['Full Stack Developer', 'Web Developer', 'Software Engineer']

        let currentIndex = 0
        let charIndex = 0
        let isDeleting = false

        const typeEffect = () => {
            const currentText = texts[currentIndex]

            if (!isDeleting && charIndex <= currentText.length) {
                setCursorText(currentText.substring(0, charIndex))
                charIndex++
            }

            if (isDeleting && charIndex >= 0) {
                setCursorText(currentText.substring(0, charIndex))
                charIndex--
            }

            if (!isDeleting && charIndex === currentText.length + 1) {
                timeoutRef.current = setTimeout(() => {
                    isDeleting = true
                }, 2000)
                return
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false
                currentIndex = (currentIndex + 1) % texts.length
            }

            const speed = isDeleting ? 50 : 100
            timeoutRef.current = setTimeout(typeEffect, speed)
        }

        typeEffect()

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    return (
        <div>
            <div className="relative z-10">
                {/* HERO SECTION */}
                <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* LEFT CONTENT */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-center lg:text-left"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-cyan-300 mb-4">
                                        Hey There!
                                    </h2>

                                    <TESTAPI/>

                                    <motion.h1
                                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                    >
                                        I&apos;m{' '}
                                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                            Abhishek Bharti
                                        </span>
                                    </motion.h1>

                                    <motion.div
                                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-8 h-12 sm:h-14 md:h-16"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 1 }}
                                    >
                                        {cursorText}
                                        <motion.span
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ repeat: Infinity, duration: 1 }}
                                            className="inline-block w-[2px] h-8 md:h-10 bg-cyan-400 ml-1"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 1.2 }}
                                    >
                                        <Link href="/contact">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30"
                                            >
                                                <span className="relative z-10">START PROJECT</span>
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                                                    initial={{ x: '-100%' }}
                                                    whileHover={{ x: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </motion.button>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            {/* RIGHT CONTENT */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex justify-center items-center"
                            >
                                <div className="relative w-96 h-96">
                                    {/* ROTATING CIRCLES */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                                        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                    />
                                    <motion.div
                                        className="absolute inset-8 rounded-full border-2 border-blue-400/30"
                                        animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                                    />

                                    {/* CENTER CARD */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <motion.div
                                                className="w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl backdrop-blur-sm"
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                            />

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="flex flex-col items-center text-center">
                                                    <Image
                                                        src="https://lh3.googleusercontent.com/a/ACg8ocLDhxPU-BeW-tFoDlzHEHooqXrUSLh2pU83B7es6rRYwt_Xg-OX=s360-c-no"
                                                        alt="profile-pic"
                                                        width={120}
                                                        height={120}
                                                        className="rounded-full"
                                                        priority
                                                    />
                                                    <div className="text-white font-bold text-xl mt-2">
                                                        Code & Design
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* FLOATING ELEMENTS */}
                                    {[
                                        <div key="1" className="w-4 h-4 bg-cyan-400 rounded-full" />,
                                        <div key="2" className="w-6 h-6 bg-blue-500 rounded-lg" />,
                                        <div key="3" className="w-8 h-2 bg-purple-500 rounded-full" />,
                                    ].map((el, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute"
                                            style={{
                                                top: `${30 + i * 20}%`,
                                                left: `${10 + i * 25}%`,
                                            }}
                                            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                                            transition={{
                                                duration: 3 + i,
                                                repeat: Infinity,
                                                ease: 'linear',
                                            }}
                                        >
                                            {el}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}