import { MediaCarousel } from './components/MediaCarousel'
import './App.css'

// Sample project data
const projects = [
  {
    title: "Project One",
    description: "Description of project one goes here",
    media: [
      {
        type: 'image',
        src: 'https://picsum.photos/800/400?random=1',
        alt: 'Project 1 Image 1',
        width: 800
      },
      {
        type: 'image',
        src: 'https://picsum.photos/600/400?random=2',
        alt: 'Project 1 Image 2',
        width: 600
      },
      {
        type: 'image',
        src: 'https://picsum.photos/900/400?random=3',
        alt: 'Project 1 Image 3',
        width: 900
      },
      {
        type: 'image',
        src: 'https://picsum.photos/700/400?random=4',
        alt: 'Project 1 Image 4',
        width: 700
      },
      {
        type: 'image',
        src: 'https://picsum.photos/1200/400?random=5',
        alt: 'Project 1 Image 5',
        width: 1200
      }
    ]
  },
  {
    title: "Project Two",
    description: "Description of project two goes here",
    media: [
      {
        type: 'image',
        src: 'https://picsum.photos/500/400?random=6',
        alt: 'Project 2 Image 1',
        width: 500
      },
      {
        type: 'image',
        src: 'https://picsum.photos/700/400?random=7',
        alt: 'Project 2 Image 2',
        width: 700
      },
      {
        type: 'image',
        src: 'https://picsum.photos/400/400?random=8',
        alt: 'Project 2 Image 3',
        width: 400
      },
      {
        type: 'image',
        src: 'https://picsum.photos/600/400?random=9',
        alt: 'Project 2 Image 4',
        width: 600
      },
      {
        type: 'image',
        src: 'https://picsum.photos/800/400?random=10',
        alt: 'Project 2 Image 5',
        width: 800
      }
    ]
  }
]

function App() {
  return (
    <div className="app">
      <h1>Tom Pe</h1>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <MediaCarousel items={project.media} />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App
