import React, { useRef, useEffect, useState } from 'react'
import './Project.css'

// MediaItem component to handle both images and videos
function MediaItem({ item }) {
  const videoRef = useRef(null)
  const [shouldPlay, setShouldPlay] = useState(false)

  useEffect(() => {
    if (item.type !== 'video') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldPlay(true)
            // Start playing when visible
            if (videoRef.current) {
              videoRef.current.play().catch(console.error)
            }
          } else {
            setShouldPlay(false)
            // Pause when not visible to save resources
            if (videoRef.current) {
              videoRef.current.pause()
            }
          }
        })
      },
      {
        threshold: 0.1, // Start playing when 10% visible
        rootMargin: '50px' // Start loading 50px before entering viewport
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [item.type])

  if (item.type === 'image') {
    return (
      <img 
        src={item.src} 
        alt={item.alt} 
        loading="lazy"
        draggable="false"
      />
    )
  }
  
  // For videos, ensure we have both .mp4 and .webm sources
  let videoSrc = item.src;
  let webmSrc, mp4Src;

  if (videoSrc.endsWith('.mp4')) {
    mp4Src = videoSrc;
    webmSrc = videoSrc.replace(/\.mp4$/, '.webm');
  } else if (videoSrc.endsWith('.webm')) {
    webmSrc = videoSrc;
    mp4Src = videoSrc.replace(/\.webm$/, '.mp4');
  } else {
    // fallback: use as is
    mp4Src = videoSrc;
    webmSrc = videoSrc;
  }
  
  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="metadata" // Only load metadata initially
      // Removed autoPlay - we'll control it with intersection observer
    >
      <source src={webmSrc} type="video/webm" />
      <source src={mp4Src} type="video/mp4" />
    </video>
  )
}

// ProjectContent component for shared layout between main and sub-projects
function ProjectContent({ text, media }) {
  return (
    <div className="project-content">
      <div className="project-text">
        {text}
      </div>
      <div className="project-media">
        {media.map((item, index) => (
          <div key={index} className="media-item">
            <MediaItem item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Project({ project }) {
  return (
    <div className="project">
      {/* Main project content */}
      <ProjectContent 
        text={
          <>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </>
        }
        media={project.media}
      />
      
      {/* Sub-projects */}
      {project.subProjects?.map((subProject, index) => (
        <div key={index} className="sub-project">
          <ProjectContent 
            text={<p>{subProject.description}</p>}
            media={subProject.media}
          />
        </div>
      ))}
    </div>
  )
}