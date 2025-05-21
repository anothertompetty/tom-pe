import { MediaCarousel } from './components/MediaCarousel'
import './App.css'
import React from 'react'

const projects = [
  {
    title: "Product at incident.io",
    description: "Hi, I'm Tom Petty, a Product Design Leader with 15 years experience designing startups. I'm Staff Designer at Incident — a platform for modern incident management.",
    media: [
      {
        type: 'image',
        src: '/src/assets/images/incident/mobile-hand.png',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'video',
        src: '/src/assets/videos/incident/shift-cards.mov',
        alt: 'Project 1 Image 2'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident/incident-dashboard-home.png',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident/incident-dashboard-illustrations.png',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident/mobile-escalation.png',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident/mobile-cover-request.png',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'video',
        src: '/src/assets/videos/incident/cover-request.mov',
        alt: 'Project 1 Image 2'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident/incident-dashboard-wizard.png',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident/incident-tote.png',
        alt: 'Project 1 Image 1'
      },
    ]
  },
  {
    title: "Brand at incident.io",
    description: "Hi, I'm Tom Petty, a Product Design Leader with 15 years experience designing startups. I'm Staff Designer at Incident — a platform for modern incident management.",
    media: [
      {
        type: 'image',
        src: '/src/assets/images/incident-brand/site-home.png',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident/incident-socks.png',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident-brand/dont-panic-t-shirt.jpg',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident-brand/tote.jpg',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'video',
        src: '/src/assets/videos/incident-brand/sev0-opening.mp4',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'image',
        src: '/src/assets/images/incident-brand/sev0-background.jpg',
        alt: 'Project 1 Image 1'
      },
    ]
  },
  {
    title: "Cord",
    description: "Hi, I'm Tom Petty, a Product Design Leader with 15 years experience designing startups. I'm Staff Designer at Incident — a platform for modern incident management.",
    media: [
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-billboard.png',
        alt: 'Project 2 Image 1'
      },
      {
        type: 'video',
        src: '/src/assets/videos/cord/cord-homepage.mov',
        alt: 'Project 2 Image 2'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-tote.png',
        alt: 'Project 2 Image 4'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-features-page.png',
        alt: 'Project 2 Image 4'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-components-overview.png',
        alt: 'Project 2 Image 3'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-logo-neon.png',
        alt: 'Project 2 Image 4'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-docs-page.png',
        alt: 'Project 2 Image 4'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-patent-1.png',
        alt: 'Project 2 Image 5'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-patent-2.png',
        alt: 'Project 2 Image 5'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-hoodie.png',
        alt: 'Project 2 Image 4'
      },
      {
        type: 'image',
        src: '/src/assets/images/cord/cord-office.png',
        alt: 'Project 2 Image 4'
      },
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
      <h1>Hi, I'm Tom Petty, a Design Leader with 15 years experience building startups. 
I'm Staff Designer at Incident — a platform for modern incident management. I was Founding Designer at Cord, helped design Google Play Console, led the teams at GoCardless and Lyst, and ran Design Club. In a past life I did branding at Wolff Olins. 
Email or LinkedIn me, or view some recent projects.</h1>
      <hr className="section-divider" />
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <MediaCarousel items={project.media} />
          {index < projects.length - 1 && <hr className="section-divider" />}
        </div>
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
