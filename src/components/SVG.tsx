'use client'

import React, { useEffect, useRef, useState } from 'react'

const videos = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
]

export default function TVPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const [glitch, setGlitch] = useState(false)
  const [blueScreen, setBlueScreen] = useState(false)

  const styles = {
    tvContainer: {
      position: 'absolute' as const,
      zIndex: 99999,
      left: "30.55rem",
      top: "133px",
      transform: "scaleX(1.42) scaleY(1.435)",
      width: '25%',
      fontFamily: 'Arial, sans-serif',
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
      clipPath: "path('M6.84 5.52s64.76-5.56 83-4.88c1.63.06 3.26.09 4.89.07 13.86-.18 71-.75 89.13 1.33l46.52 3.24s6.46-.86 6.68 13.16c0 0 6 80.06 3.52 99.51l-4.2 44.7a18.25 18.25 0 0 0-.57 4.3c-.15 2.37-1.82 7.27-12.83 7.65-2 .07-10.52.63-12.46.76-17.08 1.12-97.94 6.36-152.22 2.52L9.61 173.14s-6.2 1.52-7.06-30.76c0-.69 0-1.39-.05-2.09-.12-2.57 0-4.73-.15-7.13-1.11-13.93-2.87-58.23-1-89.48l1.42-24.94c.13-2.19.23-4.38.17-6.57-.1-1.81.58-5.97 3.9-6.65Z')",
    },
    blueScreen: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#0000FF',
      display: blueScreen ? 'block' : 'none',
      clipPath: "path('M6.84 5.52s64.76-5.56 83-4.88c1.63.06 3.26.09 4.89.07 13.86-.18 71-.75 89.13 1.33l46.52 3.24s6.46-.86 6.68 13.16c0 0 6 80.06 3.52 99.51l-4.2 44.7a18.25 18.25 0 0 0-.57 4.3c-.15 2.37-1.82 7.27-12.83 7.65-2 .07-10.52.63-12.46.76-17.08 1.12-97.94 6.36-152.22 2.52L9.61 173.14s-6.2 1.52-7.06-30.76c0-.69 0-1.39-.05-2.09-.12-2.57 0-4.73-.15-7.13-1.11-13.93-2.87-58.23-1-89.48l1.42-24.94c.13-2.19.23-4.38.17-6.57-.1-1.81.58-5.97 3.9-6.65Z')",
    },
    tvOutline: {
      position: 'absolute' as const,
      top: "-3px",
      left: 0,
      width: '100%',
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

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  return (
    <div style={styles.tvContainer}>
      <div style={styles.screenContainer}>
        <div style={{
          ...styles.videoWrapper,
          animation: glitch ? 'glitch 0.5s cubic-bezier(.25, .46, .45, .94) both infinite' : 'none',
        }}>
          <video
            ref={videoRef}
            src={videos[currentVideo]}
            style={styles.video}
            controls
          />
          <div style={styles.blueScreen} />
        </div>
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
    </div>
  )
}
