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
        alt: 'Incident.io dashboard with status overview'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident/incident-dashboard-investigations.png',
        alt: 'Incident.io investigations dashboard'
      },
    ],
    subProjects: [
      {
        description: "Created a seamless mobile experience for on-call engineers to manage incidents on the go. Focused on quick actions and clear status updates for critical situations.",
        media: [
          {
            type: 'video',
            src: '/src/assets/videos/incident/on-call-cards-animation-2.webm',
            alt: 'Mobile on-call schedule interface'
          },
          {
            type: 'image',
            src: '/src/assets/images/incident/escalation-on-device.jpg',
            alt: 'Mobile incident escalation view'
          },
          {
            type: 'video',
            src: '/src/assets/videos/incident/cover-request-animation-2.webm',
            alt: 'Cover request workflow demo'
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
        src: '/src/assets/videos/incident-brand/home-page-animation.webm',
        alt: 'Incident.io homepage animation'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident-brand/incident-careers-page.png',
        alt: 'Incident.io careers page'
      },
      {
        type: 'video',
        src: '/src/assets/videos/incident-brand/swag.webm',
        alt: 'Incident.io merchandise showcase'
      }
    ],
    subProjects: [
      {
        description: "Created a comprehensive set of brand assets including merchandise, illustrations, and marketing materials. Designed everything from t-shirts to office decor to create a cohesive brand experience.",
        media: [
          {
            type: 'image',
            src: '/src/assets/images/incident-brand/billboard-mockup.jpg',
            alt: 'Incident.io billboard mockup'
          },
          {
            type: 'video',
            src: '/src/assets/videos/incident-brand/billboards.webm',
            alt: 'Billboard campaign animation'
          }
        ]
      },
      {
        description: "Designed and executed brand presence for major industry events and conferences. Created immersive experiences that brought the incident.io brand to life in physical spaces.",
        media: [
          {
            type: 'video',
            src: '/src/assets/videos/incident-brand/sev0-opening.webm',
            alt: 'Sev0 conference opening sequence'
          },
          {
            type: 'image',
            src: '/src/assets/images/incident-brand/sev0-background.jpg',
            alt: 'Sev0 conference stage design'
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
        src: '/src/assets/videos/cord/cord-homepage.webm',
        alt: 'Cord homepage demo'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-features-page.png',
        alt: 'Cord features overview'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-docs-page.png',
        alt: 'Cord documentation page'
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
            type: 'video',
            src: '/src/assets/videos/cord/patents.webm',
            alt: 'Cord patents showcase'
          },
          {
            type: 'image',
            src: '/src/assets/images/cord/cord-tote.png',
            alt: 'Cord branded tote'
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
          <p>&copy; 2025 Tom Petty &nbsp;&middot;&nbsp; <a href="hello@anothertompetty.com">Email</a> &nbsp;&middot;&nbsp; <a href="https://linkedin.com/in/tompetty" target="_blank" rel="noopener">LinkedIn</a></p>
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
