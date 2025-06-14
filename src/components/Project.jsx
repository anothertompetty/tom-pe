import React, { useState } from 'react'
import './Project.css'

// MediaItem component to handle both images and videos
function MediaItem({ item }) {
  const [error, setError] = useState(false)

  if (item.type === 'image') {
    return (
      <img 
        src={item.src} 
        alt={item.alt} 
        loading="lazy"
        draggable="false"
        onError={() => setError(true)}
        style={{ display: error ? 'none' : 'block' }}
      />
    )
  }
  
  // For videos, we need to handle both MP4 and WebM sources correctly
  const videoSrc = item.src
  const isWebm = videoSrc.endsWith('.webm')
  const mp4Src = isWebm ? videoSrc.replace('.webm', '.mp4') : videoSrc
  const webmSrc = isWebm ? videoSrc : videoSrc.replace('.mp4', '.webm')
  
  // Log video sources for debugging
  console.log('Video sources:', { mp4Src, webmSrc })
  
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      controls={false}
      onError={(e) => {
        console.error('Video error:', e)
        setError(true)
      }}
      style={{ display: error ? 'none' : 'block' }}
    >
      <source src={mp4Src} type="video/mp4" />
      <source src={webmSrc} type="video/webm" />
      <p>Your browser doesn't support HTML5 video. Here's a <a href={mp4Src}>link to the video</a> instead.</p>
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