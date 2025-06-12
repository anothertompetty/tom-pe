import { Project } from './components/Project'
import './App.css'
import React from 'react'

const projects = [
  {
    title: "Product at incident.io",
    description: "Leading product design for incident.io, a platform for modern incident management. Focused on creating intuitive interfaces for complex workflows.",
    media: [
      {
        type: 'image',
        src: '/src/assets/images/incident/incident-dashboard-home.png',
        alt: 'Dashboard overview'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident/incident-dashboard-investigations.png',
        alt: 'Dashboard overview'
      },
    ],
    subProjects: [
      {
        description: "Created a seamless mobile experience for on-call engineers to manage incidents on the go. Focused on quick actions and clear status updates for critical situations.",
        media: [
          {
            type: 'video',
            src: '/src/assets/videos/incident/on-call-cards-animation-2.mov',
            alt: 'Mobile escalation interface'
          },
          {
            type: 'image',
            src: '/src/assets/images/incident/escalation-on-device.jpg',
            alt: 'Mobile interface for incident management'
          },
          {
            type: 'video',
            src: '/src/assets/videos/incident/cover-request-animation-2.mov',
            alt: 'Mobile escalation interface'
          },
        ]
      }
    ]
  },
  {
    title: "Brand at incident.io",
    description: "Developed and evolved the incident.io brand identity, creating a cohesive visual language across all touchpoints.",
    media: [
      {
        type: 'video',
        src: '/src/assets/videos/incident-brand/home-page-animation.mov',
        alt: 'incident.io brand guidelines'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident-brand/incident-careers-page.png',
        alt: 'incident.io brand guidelines'
      },
      {
        type: 'video',
        src: '/src/assets/videos/incident-brand/swag.mov',
        alt: 'incident.io brand guidelines'
      }
    ],
    subProjects: [
      {
        description: "Created a comprehensive set of brand assets including merchandise, illustrations, and marketing materials. Designed everything from t-shirts to office decor to create a cohesive brand experience.",
        media: [
          {
            type: 'image',
            src: '/src/assets/images/incident-brand/billboard-mockup.png',
            alt: 'Branded socks'
          },
          {
            type: 'video',
            src: '/src/assets/videos/incident-brand/billboards.mov',
            alt: 'Event opening sequence'
          }
        ]
      },
      {
        description: "Designed and executed brand presence for major industry events and conferences. Created immersive experiences that brought the incident.io brand to life in physical spaces.",
        media: [
          {
            type: 'video',
            src: '/src/assets/videos/incident-brand/sev0-opening.mp4',
            alt: 'Event opening sequence'
          },
          {
            type: 'image',
            src: '/src/assets/images/incident-brand/sev0-background.jpg',
            alt: 'Event backdrop'
          }
        ]
      }
    ]
  },
  {
    title: "Cord",
    description: "Founded and led design at Cord, a developer collaboration platform. Created a comprehensive design system and brand identity that scaled with the company's growth.",
    media: [
      {
        type: 'video',
        src: '/src/assets/videos/cord/cord-homepage.mov',
        alt: 'Cord homepage walkthrough'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-features-page.png',
        alt: 'Features overview page'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-docs-page.png',
        alt: 'Documentation page'
      }
    ],
    subProjects: [
      {
        description: "Developed Cord's brand identity and marketing materials, from digital assets to physical merchandise. Created a distinctive visual language that resonated with developers.",
        media: [
          {
            type: 'image',
            src: '/src/assets/images/cord/cord-logo-neon.png',
            alt: 'Cord neon logo'
          },
          {
            type: 'image',
            src: '/src/assets/images/cord/cord-tote.png',
            alt: 'Cord branded tote bag'
          },
          {
            type: 'image',
            src: '/src/assets/images/cord/cord-billboard.png',
            alt: 'Cord billboard in San Francisco'
          }
        ]
      },
      {
        description: "Designed Cord's office space and company culture, creating an environment that fostered creativity and collaboration. Developed a physical space that reflected our brand values.",
        media: [
          {
            type: 'image',
            src: '/src/assets/images/cord/cord-office.png',
            alt: 'Cord office space'
          },
          {
            type: 'image',
            src: '/src/assets/images/cord/cord-patent-1.png',
            alt: 'Cord patent documentation'
          },
          {
            type: 'image',
            src: '/src/assets/images/cord/cord-patent-2.png',
            alt: 'Cord patent documentation'
          }
        ]
      }
    ]
  }
]

function App() {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  // Update document theme when state changes
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="app">
      <div className="project-content">
        <div className="header-text"></div>
        <div className="header-text">
          <h1>I'm Tom, a Designer with 15 years experience building and leading startups.
            Most recently I was Staff Designer at <a href="https://incident.io" target="_blank" rel="noopener">Incident.io</a>&thinsp;&mdash;&thinsp;a platform for modern incident management.
            I was Founding Designer at <a href="https://techcrunch.com/2021/10/07/cord-gets-17-5m-to-get-more-devs-plugged-into-its-api-for-real-time-collaboration/" target="_blank" rel="noopener">Cord</a>, helped design <a href="https://android-developers.googleblog.com/2020/06/introducing-new-google-play-console-beta.html" target="_blank" rel="noopener">Google Play Console</a>,
            led the teams at <a href="https://gocardless.com" target="_blank" rel="noopener">GoCardless</a> and <a href="https://lyst.com" target="_blank" rel="noopener">Lyst</a>, and ran Design Club. In a past life I did branding at <a href="https://wolffolins.com" target="_blank" rel="noopener">Wolff Olins</a>.<br /><br />
            <a href="mailto:hello@anothertompetty.com">Email</a> or <a href="https://linkedin.com/in/tompetty" target="_blank" rel="noopener">LinkedIn</a> me, or view some recent projects:</h1>
        </div>
      </div>
      <hr className="section-divider" />
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project project={project} />
          {index < projects.length - 1 && <hr className="section-divider" />}
        </React.Fragment>
      ))}
      <div className="footer">
        <div className="footer-text">
          <p><strong>&copy; 2025 Tom Petty</strong></p>
          <div className="social-links">
            <a href="hello@anothertompetty.com">Email</a>
            <a href="https://linkedin.com/in/tompetty" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <img src="/src/assets/images/icons/moon.svg" alt="Dark mode" width="16" height="16" />
          ) : (
            <img src="/src/assets/images/icons/sunglasses.svg" alt="Light mode" width="16" height="16" />
          )}
        </button>
      </div>
    </div>
  )
}

export default App
