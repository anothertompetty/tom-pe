import { useRef, useEffect } from 'react'
import './Project.css'

// MediaItem component to handle both images and videos
function MediaItem({ item }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (item.type !== 'video') return

    const videoEl = videoRef.current
    if (!videoEl) return

    // iOS Safari requires `muted` to be set as a property (React's JSX prop
    // doesn't always reflect to the attribute) and needs `playsinline` /
    // `webkit-playsinline` to be present before play() will succeed inline.
    videoEl.muted = true
    videoEl.defaultMuted = true
    videoEl.setAttribute('muted', '')
    videoEl.setAttribute('playsinline', '')
    videoEl.setAttribute('webkit-playsinline', '')

    const tryPlay = () => {
      const playPromise = videoEl.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Autoplay was blocked (e.g. Low Power Mode on iOS). Retry once
          // the user interacts with the page.
          const resume = () => {
            videoEl.play().catch(() => {})
            window.removeEventListener('touchstart', resume)
            window.removeEventListener('click', resume)
          }
          window.addEventListener('touchstart', resume, { once: true, passive: true })
          window.addEventListener('click', resume, { once: true })
        })
      }
    }

    tryPlay()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay()
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
  }, [item.type, item.src])

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

  return (
    <video
      ref={videoRef}
      src={item.src}
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      disableRemotePlayback
      aria-label={item.alt}
    />
  )
}

// Pull-quote / testimonial block
function ProjectQuote({ quote }) {
  return (
    <blockquote className="project-quote">
      <p>{quote.text}</p>
      <cite>
        <span className="quote-name">{quote.attribution.name}</span>
        {quote.attribution.role && (
          <span className="quote-role">{quote.attribution.role}</span>
        )}
      </cite>
    </blockquote>
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
            {project.description && <p>{project.description}</p>}
            {project.quote && <ProjectQuote quote={project.quote} />}
          </>
        }
        media={project.media}
      />
      
      {/* Sub-projects */}
      {project.subProjects?.map((subProject, index) => (
        <div key={index} className="sub-project">
          <ProjectContent 
            text={
              <>
                {subProject.description && <p>{subProject.description}</p>}
                {subProject.quote && <ProjectQuote quote={subProject.quote} />}
              </>
            }
            media={subProject.media}
          />
        </div>
      ))}
    </div>
  )
}