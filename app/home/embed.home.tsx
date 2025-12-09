'use client'

import { useEffect, useState, memo } from 'react'
import { motion } from 'framer-motion'

/* ---------------- CONFIG ---------------- */
const VISIBLE_COUNT = 7
const CENTER_INDEX = 3
const AUTO_SCROLL_INTERVAL = 5000
const TRANSITION_DURATION = 1

const cardConfigs = [
  { scale: 0.4, x: '120%', rotate: 12, zIndex: 10, opacity: 0.4, filter: 'blur(4px) grayscale(0.5)' },
  { scale: 0.6, x: '80%', rotate: 8, zIndex: 20, opacity: 0.6, filter: 'blur(4px) grayscale(0.25)' },
  { scale: 0.8, x: '40%', rotate: 4, zIndex: 30, opacity: 0.8, filter: 'none' },
  { scale: 1, x: '0%', rotate: 0, zIndex: 40, opacity: 1, filter: 'none' },
  { scale: 0.8, x: '-40%', rotate: -4, zIndex: 30, opacity: 0.8, filter: 'none' },
  { scale: 0.6, x: '-80%', rotate: -8, zIndex: 20, opacity: 0.6, filter: 'blur(4px) grayscale(0.25)' },
  { scale: 0.4, x: '-120%', rotate: -12, zIndex: 10, opacity: 0.4, filter: 'blur(4px) grayscale(0.5)' },
]

/* ---------------- CARD — SAME DESIGN + PLAY/PAUSE ---------------- */
const ShortsCard = memo(({
  videoId,
  position,
  isActive,
  isPlaying,
  onPlayStateChange,
}: {
  videoId: string
  position: number
  isActive: boolean
  isPlaying: boolean
  onPlayStateChange: (playing: boolean) => void
}) => {
  const baseParams = 'controls=0&rel=0&modestbranding=1&playsinline=1&fs=0&disablekb=1&loop=1&mute=0'
  const autoplayParam = isPlaying ? '&autoplay=1' : '&autoplay=0'
  const playlistParam = `&playlist=${videoId}` // required for loop

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${baseParams}${autoplayParam}${playlistParam}`

  // Listen to iframe messages to detect when video actually playing/ended/paused
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (!e.data || typeof e.data !== 'string') return
      try {
        const data = JSON.parse(e.data)
        if (data.event === 'infoDelivery' && data.info?.playerState !== undefined) {
          const state = data.info.playerState
          // 1 = playing, 2 = paused, 0 = ended
          if (state === 1 && isActive) onPlayStateChange(true)
          if ((state === 2 || state === 0) && isActive) onPlayStateChange(false)
        }
      } catch { }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [videoId, isActive, onPlayStateChange])

  return (
    <motion.div
      animate={cardConfigs[position]}
      transition={{ duration: TRANSITION_DURATION, ease: 'easeInOut' }}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-xl overflow-hidden transition-all duration-300 cursor-pointer
        ${isActive ? 'ring-2 ring-cyan-400 shadow-2xl shadow-cyan-500/30' : 'shadow-lg'}
        hover:scale-[1.02] hover:z-50
      `}
      style={{ width: 180, height: 320 }}
      onClick={() => isActive && onPlayStateChange(!isPlaying)}
    >
      {/* Glow — identical to original */}
      {isActive && (
        <motion.div
          className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-30"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      <div className="relative w-full h-full bg-black rounded-xl overflow-hidden">
        <iframe
          key={`${videoId}-${isPlaying}`}
          src={embedUrl}
          title={videoId}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={false}
          className="w-full h-full pointer-events-none"
          sandbox="allow-scripts allow-same-origin allow-presentation"
        />

        {/* Playing badge */}
        {isPlaying && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse font-medium">
            Playing
          </div>
        )}

        {/* Active dot */}
        {isActive && !isPlaying && (
          <div className="absolute top-2 left-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
            ●
          </div>
        )}
      </div>

      {/* Bottom label — identical */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
        <div className="text-center text-white text-xs font-medium">
          @loopsafar
        </div>
      </div>
    </motion.div>
  )
})

ShortsCard.displayName = 'ShortsCard'

/* ---------------- MAIN — 100% ORIGINAL DESIGN + SMART PLAY CONTROL ---------------- */
const YouTubeShortsSection = ({ shortIds }: { shortIds: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)        // is ANY video playing?
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const getVideoIndex = (pos: number) =>
    (activeIndex + pos - CENTER_INDEX + shortIds.length) % shortIds.length

  const currentCenterVideoId = shortIds[getVideoIndex(CENTER_INDEX)]

  const handlePlayStateChange = (playing: boolean) => {
    if (playing) {
      setPlayingVideoId(currentCenterVideoId)
      setIsPlaying(true)
    } else {
      setPlayingVideoId(null)
      setIsPlaying(false)
    }
  }

  const next = () => {
    setPlayingVideoId(null)
    setIsPlaying(false)
    setActiveIndex(i => (i + 1) % shortIds.length)
  }

  const prev = () => {
    setPlayingVideoId(null)
    setIsPlaying(false)
    setActiveIndex(i => (i - 1 + shortIds.length) % shortIds.length)
  }

  // Auto-scroll only when: not playing AND not hovered
  useEffect(() => {
    if (isPlaying || isHovered) return
    const interval = setInterval(next, AUTO_SCROLL_INTERVAL)
    return () => clearInterval(interval)
  }, [activeIndex, isPlaying, isHovered])

  if (shortIds.length < 4) return null

  return (
    <div className="relative py-12 px-4 max-w-7xl mx-auto">
      {/* Header — identical */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          YouTube <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Shorts</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Auto-scroll every {AUTO_SCROLL_INTERVAL / 1000}s • Hover to pause • Click center to play
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/20 rounded-3xl pointer-events-none" />

      <div
        className="relative h-[420px] w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Center line & circle — identical */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full opacity-20">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-cyan-400/20 rounded-full" />

        {/* Cards */}
        {Array.from({ length: VISIBLE_COUNT }).map((_, pos) => {
          const videoId = shortIds[getVideoIndex(pos)]
          const isActive = pos === CENTER_INDEX
          const isCurrentlyPlaying = playingVideoId === videoId

          return (
            <ShortsCard
              key={videoId}
              videoId={videoId}
              position={pos}
              isActive={isActive}
              isPlaying={isCurrentlyPlaying}
              onPlayStateChange={handlePlayStateChange}
            />
          )
        })}

        {/* Navigation — identical */}
        <button
          onClick={prev}
          disabled={isPlaying}
          className="absolute left-4 bottom-1 -translate-y-1/2 w-12 h-12 rounded-full
            bg-gray-900/80 backdrop-blur-sm border border-gray-700
            flex items-center justify-center text-white text-2xl
            hover:bg-gray-800 hover:border-cyan-500 transition-all active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={isPlaying}
          className="absolute right-4 bottom-1 -translate-y-1/2 w-12 h-12 rounded-full
            bg-gray-900/80 backdrop-blur-sm border border-gray-700
            flex items-center justify-center text-white text-2xl
            hover:bg-gray-800 hover:border-cyan-500 transition-all active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          →
        </button>

        {/* Status dot */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : isHovered ? 'bg-yellow-500' : 'bg-green-500'}`} />
        </div>

        {/* Dots — same as original */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: Math.min(5, shortIds.length) }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${i === 0 ? 'bg-cyan-400 w-6' : 'bg-gray-600'}`}
            />
          ))}
        </div>
      </div>

      {/* Legend — identical */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Scrolling</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Paused (hover)</span>
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