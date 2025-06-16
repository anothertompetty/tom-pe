import { Project } from './components/Project'
import './App.css'
import React from 'react'

// Asset paths as strings
const incidentHomeAnimation = '/videos/incident-brand/home-page-animation.webm';
const incidentCareersPage = '/images/incident-brand/incident-careers-page.png';
const incidentSwag = '/videos/incident-brand/swag.webm';
const incidentBillboard = '/images/incident-brand/billboard-mockup.jpg';
const incidentBillboards = '/videos/incident-brand/billboards.webm';
const incidentSev0 = '/videos/incident-brand/sev0-opening.webm';
const incidentSev0Bg = '/images/incident-brand/sev0-background.jpg';
const cordHomepage = '/videos/cord/cord-homepage.webm';
const cordFeatures = '/images/cord/cord-features-page.png';
const cordDocs = '/images/cord/cord-docs-page.png';
const cordLogo = '/images/cord/cord-logo-neon.png';
const cordPatents = '/videos/cord/patents.webm';
const cordTote = '/images/cord/cord-tote.png';
const incidentDashboardHome = '/images/incident/incident-dashboard-home.png';
const incidentDashboardInvestigations = '/images/incident/incident-dashboard-investigations.png';
const incidentOnCallCards = '/videos/incident/on-call-cards-animation-2.webm';
const incidentEscalation = '/images/incident/escalation-on-device.jpg';
const incidentCoverRequest = '/videos/incident/cover-request-animation-2.webm';
const moonIcon = '/images/icons/moon.svg';
const sunglassesIcon = '/images/icons/sunglasses.svg';

const projects = [
  {
    title: "Product at incident.io",
    description: "During my time at incident.io, I led a series of large projects, including their big bet on AI Investigations. I also spearheaded the creation and rollout of a cohesive design system, and was the hiring manager across Product and Brand Design.",
    media: [
      {
        type: 'image',
        src: incidentDashboardHome,
        alt: 'Incident.io dashboard with status overview'
      },
      {
        type: 'image',
        src: incidentDashboardInvestigations,
        alt: 'Incident.io investigations dashboard'
      },
    ],
    subProjects: [
      {
        description: "Releasing an On-call product (and going head to head with PagerDuty) was the priority for 2024. I designed the On-call mobile app, as well as all the brand and marketing materials. The launch exceeded expectations, with multiple customers doing complete rip-and-replace migrations from PagerDuty.",
        media: [
          {
            type: 'video',
            src: incidentOnCallCards,
            alt: 'Mobile on-call schedule interface'
          },
          {
            type: 'image',
            src: incidentEscalation,
            alt: 'Mobile incident escalation view'
          },
          {
            type: 'video',
            src: incidentCoverRequest,
            alt: 'Cover request workflow demo'
          },
        ]
      }
    ]
  },
  {
    title: "Brand at incident.io",
    description: "From redesigning the website, to coining the phrase 'Move fast when you break things', a big chunk of my work at incident.io was finding ways to push the brand forward in an otherwise stale market.",
    media: [
      {
        type: 'video',
        src: incidentHomeAnimation,
        alt: 'Incident.io homepage animation'
      },
      {
        type: 'image',
        src: incidentCareersPage,
        alt: 'Incident.io careers page'
      },
      {
        type: 'video',
        src: incidentSwag,
        alt: 'Incident.io merchandise showcase'
      }
    ],
    subProjects: [
      {
        description: "One fun project was designing and rolling out incident.io's first billboard campaign, across San Francisco, and 500+ sites in London.",
        media: [
          {
            type: 'image',
            src: incidentBillboard,
            alt: 'Incident.io billboard mockup'
          },
          {
            type: 'video',
            src: incidentBillboards,
            alt: 'Billboard campaign animation'
          }
        ]
      },
      {
        description: "I created the brand and marketing materials for incident.io's first conference, SEV0 in San Francisco.",
        media: [
          {
            type: 'video',
            src: incidentSev0,
            alt: 'Sev0 conference opening sequence'
          },
          {
            type: 'image',
            src: incidentSev0Bg,
            alt: 'Sev0 conference stage design'
          }
        ]
      }
    ]
  },
  {
    title: "Cord",
    description: "I was Founding Designer at Cord, a platform for adding real-time collaboration to your apps. From designing an MVP, to helping close 6-figure deals, to hiring for all teams, I executed and led across the company. We never reached true PMF, so now Cord lives on a farm and gets stroked every day.",
    media: [
      {
        type: 'video',
        src: cordHomepage,
        alt: 'Cord homepage demo'
      },
      {
        type: 'image',
        src: cordFeatures,
        alt: 'Cord features overview'
      },
      {
        type: 'image',
        src: cordDocs,
        alt: 'Cord documentation page'
      }
    ],
    subProjects: [
      {
        description: "As a founding employee, you can do fun things. For example, I partnered with Bakken & Bæck on the early brand design, had my work patented, and made all the swag.",
        media: [
          {
            type: 'image',
            src: cordLogo,
            alt: 'Cord neon logo'
          },
          {
            type: 'video',
            src: cordPatents,
            alt: 'Cord patents showcase'
          },
          {
            type: 'image',
            src: cordTote,
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
            led the teams at <a href="https://gocardless.com" target="_blank" rel="noopener">GoCardless</a> and <a href="https://lyst.com" target="_blank" rel="noopener">Lyst</a>, and ran <a href="https://designclub.io" target="_blank" rel="noopener">Design Club</a>. In a past life I did branding at <a href="https://wolffolins.com" target="_blank" rel="noopener">Wolff Olins</a>.<br /><br />
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
            <img src={moonIcon} alt="Dark mode" width="16" height="16" />
          ) : (
            <img src={sunglassesIcon} alt="Light mode" width="16" height="16" />
          )}
        </button>
      </div>
    </div>
  )
}

export default App
