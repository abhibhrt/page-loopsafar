'use client'

import { useEffect, useState, memo, useRef } from 'react'
import { motion } from 'framer-motion'
import YouTube from 'react-youtube'

/* ---------------- CONFIG ---------------- */

const VISIBLE_COUNT = 7
const CENTER_INDEX = 3
const AUTO_SCROLL_INTERVAL = 5000
const TRANSITION_DURATION = 1

const cardConfigs = [
  { scale: 0.4, x: '120%', rotate: 12, zIndex: 10, opacity: 0.4, blur: 'blur-sm', grayscale: 'grayscale-50' },
  { scale: 0.6, x: '80%', rotate: 8, zIndex: 20, opacity: 0.6, blur: 'blur-sm', grayscale: 'grayscale-25' },
  { scale: 0.8, x: '40%', rotate: 4, zIndex: 30, opacity: 0.8, blur: '', grayscale: '' },
  { scale: 1, x: '0%', rotate: 0, zIndex: 40, opacity: 1, blur: '', grayscale: '' },
  { scale: 0.8, x: '-40%', rotate: -4, zIndex: 30, opacity: 0.8, blur: '', grayscale: '' },
  { scale: 0.6, x: '-80%', rotate: -8, zIndex: 20, opacity: 0.6, blur: 'blur-sm', grayscale: 'grayscale-25' },
  { scale: 0.4, x: '-120%', rotate: -12, zIndex: 10, opacity: 0.4, blur: 'blur-sm', grayscale: 'grayscale-50' },
]

/* ---------------- CARD ---------------- */

const ShortsCard = memo(
  ({
    videoId,
    position,
    isActive,
    onVideoPlay,
  }: {
    videoId: string
    position: number
    isActive: boolean
    onVideoPlay: (v: boolean) => void
  }) => {
    const playerRef = useRef<any>(null)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    const opts = {
      height: '320',
      width: '180',
      playerVars: {
        autoplay: 0,
        // mute: 1,
        controls: 0,
        rel: 0,
        playsinline: 1,
        fs: 0,
        disablekb: 1,
        modestbranding: 1,
      },
    }

    const handleStateChange = (e: { data: number }) => {
      const playing = e.data === 1
      setIsVideoPlaying(playing)
      onVideoPlay(playing)
    }

    return (
      <motion.div
        animate={cardConfigs[position]}
        transition={{ duration: TRANSITION_DURATION, ease: 'easeInOut' }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-xl overflow-hidden transition-all duration-300
          ${cardConfigs[position].blur} ${cardConfigs[position].grayscale}
          ${isActive ? 'ring-2 ring-cyan-400 shadow-2xl shadow-cyan-500/30' : 'shadow-lg'}
          hover:scale-[1.02] hover:z-50
        `}
        style={{ width: 180, height: 320 }}
      >
        {/* Glow effect for active card */}
        {isActive && (
          <motion.div 
            className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-30"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        
        <div className="relative w-full h-full bg-black rounded-xl overflow-hidden ">
          <YouTube
            videoId={videoId}
            opts={opts}
            iframeClassName="object-cover z-10"
            onReady={(e) => (playerRef.current = e.target)}
            onStateChange={handleStateChange}
          />
          
          {/* Play indicator */}
          {isVideoPlaying && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
              ▶ Playing
            </div>
          )}
          
          {/* Active indicator */}
          {isActive && !isVideoPlaying && (
            <div className="absolute top-2 left-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
              ●
            </div>
          )}
        </div>
        
        {/* Subtle bottom info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
          <div className="text-center">
            <div className="text-white text-xs font-medium">
              Position {position + 1}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
)

ShortsCard.displayName = 'ShortsCard'

/* ---------------- MAIN ---------------- */

const YouTubeShortsSection = ({ shortIds }: { shortIds: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const getVideoIndex = (pos: number) =>
    (activeIndex + pos - CENTER_INDEX + shortIds.length) %
    shortIds.length

  const next = () => {
    if (!isPlaying)
      setActiveIndex((i) => (i + 1) % shortIds.length)
  }

  const prev = () => {
    if (!isPlaying)
      setActiveIndex((i) => (i - 1 + shortIds.length) % shortIds.length)
  }

  // Auto-scroll with pause control
  useEffect(() => {
    if (isPlaying || isPaused) return
    const id = setInterval(next, AUTO_SCROLL_INTERVAL)
    return () => clearInterval(id)
  }, [isPlaying, isPaused])

  if (shortIds.length < 4) return null

  return (
    <div className="relative py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          YouTube <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Shorts</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Auto-scroll every {AUTO_SCROLL_INTERVAL/1000}s • Hover to pause • Click arrows to navigate
        </p>
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/20 rounded-3xl" />
      
      {/* Main carousel container */}
      <div 
        className="relative h-[420px] w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Center guide line */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full opacity-20">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        </div>
        
        {/* Center circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-cyan-400/20 rounded-full" />
        
        {/* Cards */}
        {Array.from({ length: VISIBLE_COUNT }).map((_, pos) => {
          const videoId = shortIds[getVideoIndex(pos)]
          return (
            <ShortsCard
              key={videoId}
              videoId={videoId}
              position={pos}
              isActive={pos === CENTER_INDEX}
              onVideoPlay={setIsPlaying}
            />
          )
        })}

        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute left-4 bottom-1 -translate-y-1/2 w-12 h-12 rounded-full 
                   bg-gray-900/80 backdrop-blur-sm border border-gray-700 
                   flex items-center justify-center text-white text-2xl
                   hover:bg-gray-800 hover:border-cyan-500 transition-all
                   active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPlaying}
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-4 bottom-1 -translate-y-1/2 w-12 h-12 rounded-full 
                   bg-gray-900/80 backdrop-blur-sm border border-gray-700 
                   flex items-center justify-center text-white text-2xl
                   hover:bg-gray-800 hover:border-cyan-500 transition-all
                   active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPlaying}
        >
          →
        </button>
        
        {/* Status indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500' : isPaused ? 'bg-yellow-500' : 'bg-green-500'}`} />
        </div>
        
        {/* Progress dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2">
            {Array.from({ length: Math.min(5, shortIds.length) }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === 0 ? 'bg-cyan-400 w-6' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Instructions */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Scrolling</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Paused</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span>Playing</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YouTubeShortsSection