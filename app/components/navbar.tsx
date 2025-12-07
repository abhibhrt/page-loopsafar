// components/navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Progress', path: '/progress' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMenu = () => setIsOpen(false)

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed p-2 top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                            >
                                LOOPSAFAR
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link key={item.path} href={item.path}>
                                    <motion.div
                                        className="relative group"
                                        whileHover={{ y: -2 }}
                                    >
                                        <span
                                            className={`text-lg font-medium transition-colors duration-300 ${pathname === item.path
                                                    ? 'text-cyan-300'
                                                    : 'text-gray-300 hover:text-white'
                                                }`}
                                        >
                                            {item.name}
                                        </span>
                                        <motion.div
                                            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                                            initial={{ width: pathname === item.path ? '100%' : 0 }}
                                            animate={{ width: pathname === item.path ? '100%' : 0 }}
                                            whileHover={{ width: '100%' }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            onClick={closeMenu}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-64 bg-gray-900/95 backdrop-blur-md z-50 md:hidden border-l border-gray-800"
                        >
                            <div className="flex flex-col h-full">
                                <div className="p-6 border-b border-gray-800">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                        LOOPSAFAR
                                    </div>
                                </div>

                                <div className="flex-1 p-6">
                                    <div className="flex flex-col space-y-6">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.path}
                                                href={item.path}
                                                onClick={closeMenu}
                                            >
                                                <motion.div
                                                    className={`text-xl font-medium px-4 py-3 rounded-lg transition-colors duration-300 ${pathname === item.path
                                                            ? 'bg-gray-800 text-cyan-300'
                                                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                                        }`}
                                                    whileHover={{ x: 4 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    {item.name}
                                                </motion.div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 border-t border-gray-800">
                                    <button
                                        onClick={closeMenu}
                                        className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                    >
                                        Get in Touch
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}