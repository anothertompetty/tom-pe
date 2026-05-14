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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(console.error)
          } else {
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

    return () => {
      observer.unobserve(videoEl)
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