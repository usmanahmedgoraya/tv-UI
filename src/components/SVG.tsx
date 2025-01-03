'use client'

import { ArrowLeftFromLine } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

export default function TVPlayer({ videoUrl, setVideoUrl, setIsWatch, isWatch }: { videoUrl: any, setVideoUrl: any, setIsWatch: any, isWatch: any }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [glitch, setGlitch] = useState(false)
  const [blueScreen, setBlueScreen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const handleBack = () =>{
    setVideoUrl(null);
    setIsWatch(false)
  }

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      setIsSmallScreen(width >= 768 && width <= 830)
    }
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  const styles = {
    tvContainer: {
      position: 'absolute' as const,
      zIndex: 99999,
      left: isSmallScreen ? '31.8rem' : "30.71rem",
      top: isSmallScreen ? "115px" : "133px",
      transform: isSmallScreen ? "scaleX(1.32) scaleY(1.335)" : "scaleX(1.42) scaleY(1.435)",
      fontFamily: 'Arial, sans-serif',
      width: isSmallScreen ? '100%' : 'auto',
    },
    screenContainer: {
      width: '71%',
      height: '200px',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      overflow: 'hidden',
      position: 'relative' as const,
    },
    videoWrapper: {
      position: 'relative' as const,
      width: '100%',
      height: '100%',
      filter: isPlaying ? 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.7))' : 'none',
      animation: glitch ? 'glitch 0.5s cubic-bezier(.25, .46, .45, .94) both infinite' : 'none',
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      display: blueScreen ? 'none' : 'block',
      clipPath: isFullScreen
        ? 'none'
        : "path('M6.84 5.52s64.76-5.56 83-4.88c1.63.06 3.26.09 4.89.07 13.86-.18 71-.75 89.13 1.33l46.52 3.24s6.46-.86 6.68 13.16c0 0 6 80.06 3.52 99.51l-4.2 44.7a18.25 18.25 0 0 0-.57 4.3c-.15 2.37-1.82 7.27-12.83 7.65-2 .07-10.52.63-12.46.76-17.08 1.12-97.94 6.36-152.22 2.52L9.61 173.14s-6.2 1.52-7.06-30.76c0-.69 0-1.39-.05-2.09-.12-2.57 0-4.73-.15-7.13-1.11-13.93-2.87-58.23-1-89.48l1.42-24.94c.13-2.19.23-4.38.17-6.57-.1-1.81.58-5.97 3.9-6.65Z')",
    },
    tvOutline: {
      position: 'absolute' as const,
      top: "-3px",
      left: 0,
      width: isSmallScreen ? "31%" : '68%',
      height: '100%',
      pointerEvents: 'none' as const,
    },
    glowPath: {
      filter: isPlaying ? 'blur(6px)' : 'none',
      stroke: isPlaying ? 'rgba(255, 255, 255, 0.7)' : "none",
      strokeWidth: 4,
    },
    svgContainer: {
      filter: isPlaying ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))' : 'none',
    },
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    const handleFullScreenChange = () => {
      setIsFullScreen(
        document.fullscreenElement === video
      )
    }

    // Autoplay video when component renders
    video.play().catch((error) => console.error('Error trying to autoplay video:', error));

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    document.addEventListener('fullscreenchange', handleFullScreenChange)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
    }
  }, [])

  return (
    <div style={styles.tvContainer} className='group'>
      <div style={styles.screenContainer}>
        <div style={{
          ...styles.videoWrapper,
          animation: glitch ? 'glitch 0.5s cubic-bezier(.25, .46, .45, .94) both infinite' : 'none',
        }}>
          <video
            ref={videoRef}
            src={videoUrl}
            style={styles.video}
            controls
            autoPlay={true}  // Ensures the video auto-plays
          />
        </div>
      </div>
      <ArrowLeftFromLine className='cursor-pointer text-white mt-0.5 absolute group-hover:inline hidden transition-all duration-500 top-1 left-2' size={18} onClick={handleBack}/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 241.62 179.76"
        style={{ ...styles.tvOutline, ...styles.svgContainer }}
      >
        <path
          d="M6.84 5.52s64.76-5.56 83-4.88c1.63.06 3.26.09 4.89.07 13.86-.18 71-.75 89.13 1.33l46.52 3.24s6.46-.86 6.68 13.16c0 0 6 80.06 3.52 99.51l-4.2 44.7a18.25 18.25 0 0 0-.57 4.3c-.15 2.37-1.82 7.27-12.83 7.65-2 .07-10.52.63-12.46.76-17.08 1.12-97.94 6.36-152.22 2.52L9.61 173.14s-6.2 1.52-7.06-30.76c0-.69 0-1.39-.05-2.09-.12-2.57 0-4.73-.15-7.13-1.11-13.93-2.87-58.23-1-89.48l1.42-24.94c.13-2.19.23-4.38.17-6.57-.1-1.81.58-5.97 3.9-6.65Z"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          style={styles.glowPath}
        />
      </svg>
    </div>
  )
}
