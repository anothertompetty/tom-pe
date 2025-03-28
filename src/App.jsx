import { MediaCarousel } from './components/MediaCarousel'
import './App.css'

// Sample project data
const projects = [
  {
    title: "incident.io On-call",
    description: "Description of project one goes here",
    media: [
      {
        type: 'image',
        src: '/src/assets/images/on-call/mobile-hand.png',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'video',
        src: '/src/assets/videos/on-call/shift-cards.mov',
        alt: 'Project 1 Image 2'
      },
      {
        type: 'image',
        src: '/src/assets/images/on-call/mobile-escalation.png',
        alt: 'Project 1 Image 1'
      },
      {
        type: 'video',
        src: '/src/assets/videos/on-call/cover-request.mov',
        alt: 'Project 1 Image 2'
      },
      {
        type: 'image',
        src: '/src/assets/images/on-call/mobile-cover-request.png',
        alt: 'Project 1 Image 1'
      }
    ]
  },
  {
    title: "Cord",
    description: "Description of project two goes here",
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
  return (
    <div className="app">
      <h1>Hi, I'm Tom Petty, a Product Design Leader with 15 years experience designing startups. 
I'm Staff Designer at Incident — a platform for modern incident management. I was Founding Designer at Cord, helped design Google Play Console, led the design teams at GoCardless and Lyst, and ran Design Club. In a past life I did branding at Wolff Olins. 
Email or LinkedIn me, or view some recent projects:</h1>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <MediaCarousel items={project.media} />
        </div>
      ))}
    </div>
  )
}

export default App
