import React from 'react'
import './Project.css'

// MediaItem component to handle both images and videos
function MediaItem({ item }) {
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
  
  // For videos, we'll use the same filename but different extensions
  const videoSrc = item.src
  const webmSrc = videoSrc.replace(/\.mp4$/, '.webm')
  
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      // loading="lazy"
    >
      <source src={webmSrc} type="video/webm" />
      <source src={videoSrc} type="video/mp4" />
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