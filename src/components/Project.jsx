import { useRef, useEffect, useState } from 'react'
import './Project.css'

// MediaItem component to handle both images and videos
function MediaItem({ item }) {
  const elementRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  // Defer loading media until it's near the viewport
  useEffect(() => {
    if (shouldLoad) return

    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '600px 0px'
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [shouldLoad])

  // Play/pause videos based on visibility, once they've been loaded
  useEffect(() => {
    if (item.type !== 'video') return
    if (!shouldLoad) return

    const videoEl = elementRef.current
    if (!videoEl) return

    // iOS Safari doesn't auto-fetch when the video src is set dynamically;
    // explicitly call load() so the new source actually starts downloading.
    videoEl.load()

    // Track visibility so we can also retry play() once the video is ready.
    // On iOS, play() called before the video has buffered enough rejects
    // silently, which would otherwise leave the video frozen on its first frame.
    let isInView = false
    const tryPlay = () => {
      if (isInView) {
        videoEl.play().catch(() => {})
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInView = true
            tryPlay()
          } else {
            isInView = false
            videoEl.pause()
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    )

    observer.observe(videoEl)
    videoEl.addEventListener('canplay', tryPlay)

    return () => {
      observer.unobserve(videoEl)
      videoEl.removeEventListener('canplay', tryPlay)
    }
  }, [item.type, shouldLoad])

  if (item.type === 'image') {
    return (
      <img
        ref={elementRef}
        src={shouldLoad ? item.src : undefined}
        alt={item.alt}
        loading="lazy"
        draggable="false"
      />
    )
  }

  return (
    <video
      ref={elementRef}
      muted
      loop
      playsInline
      preload="metadata"
      src={shouldLoad ? item.src : undefined}
    />
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