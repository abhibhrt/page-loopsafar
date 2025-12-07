// app/page.tsx
import AboutSection from './home/about.home'
import YouTubeShortsSection from './home/embed.home'
import HomePage from './home/main.home'

export default function Home() {
  const shortIds = [
    'RP-dHcdcJh4',
    '7LiQUfmYKkg',
    'PaBRTK8LOa0',
    '_SEyMCpfoKs',
    'AB_Q0DhzO8s',
    'wFgBdj7aLAE',
    'TV1z60b9E30',
    'awkviHaVowE',
    'KknABu4SAmc',
    'SkrCBc0vY8g',
    'yPWM74Bxl2s',

  ]
  return (
    <div className="h-full relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements and Grid pattern (kept the same) */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <HomePage />
      <YouTubeShortsSection shortIds={shortIds} />
      <AboutSection/>
    </div>
  )
}