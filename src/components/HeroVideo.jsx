import { useState, useRef, useEffect } from 'react'

const HeroVideo = ({ videoSrc, title, subtitle, ctaPrimary, ctaSecondary, onCtaPrimaryClick, onCtaSecondaryClick }) => {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Autoplay prevented:', err))
      setIsLoaded(true)
    }
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          filter: 'blur(6px)',
          transform: 'scale(1.05)',
        }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>

      {/* Dark Overlay with Grain */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-elegant font-bold mb-4 sm:mb-6 text-balance leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-balance opacity-95 leading-relaxed px-2">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={onCtaPrimaryClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            {ctaPrimary}
          </button>
          <button
            onClick={onCtaSecondaryClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10 text-sm sm:text-base"
          >
            {ctaSecondary}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroVideo
