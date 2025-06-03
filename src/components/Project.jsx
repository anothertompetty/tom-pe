import React from 'react'
import './Project.css'

export function Project({ project }) {
  return (
    <div className="project">
      <div className="project-content">
        <div className="project-text">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
        <div className="project-media">
          {project.media.map((item, index) => (
            <div key={index} className="media-item">
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy"
                  draggable="false"
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  loading="lazy"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {project.subProjects && project.subProjects.map((subProject, index) => (
        <div key={index} className="sub-project">
          <div className="project-content">
            <div className="project-text">
              <p>{subProject.description}</p>
            </div>
            <div className="project-media">
              {subProject.media.map((item, subIndex) => (
                <div key={subIndex} className="media-item">
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      loading="lazy"
                      draggable="false"
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      loading="lazy"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 