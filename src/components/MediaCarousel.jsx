import Slider from 'react-slick'
import { useRef, useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MediaCarousel.css'

export function MediaCarousel({ items }) {
  const sliderRef = useRef(null)
  const [itemWidths, setItemWidths] = useState({})
  const [mediaHeight, setMediaHeight] = useState(500)

  useEffect(() => {
    // Function to update media height based on window width
    const updateMediaHeight = () => {
      setMediaHeight(window.innerWidth <= 1024 ? 360 : 500)
    }

    // Initial height
    updateMediaHeight()

    // Listen for window resize
    window.addEventListener('resize', updateMediaHeight)

    // Cleanup
    return () => window.removeEventListener('resize', updateMediaHeight)
  }, [])

  useEffect(() => {
    // Function to get natural width of media
    const getMediaWidth = (src, type) => {
      return new Promise((resolve) => {
        if (type === 'image') {
          const img = new Image()
          img.onload = () => {
            // Calculate width maintaining aspect ratio with current height
            const aspectRatio = img.naturalWidth / img.naturalHeight
            const width = Math.round(mediaHeight * aspectRatio)
            resolve(width)
          }
          img.src = src
        } else {
          // For videos, load metadata to get dimensions
          const video = document.createElement('video')
          video.onloadedmetadata = () => {
            // Calculate width maintaining aspect ratio with current height
            const aspectRatio = video.videoWidth / video.videoHeight
            const width = Math.round(mediaHeight * aspectRatio)
            resolve(width)
          }
          video.src = src
        }
      })
    }

    // Get widths for all items
    const loadWidths = async () => {
      const widths = {}
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        const width = await getMediaWidth(item.src, item.type)
        widths[i] = width
      }
      setItemWidths(widths)
    }

    loadWidths()
  }, [items, mediaHeight])

  const handleSlideClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index)
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 5,
    pauseOnHover: true,
    pauseOnFocus: true,
  }

  return (
    <div className="media-carousel">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div 
            key={index} 
            className="carousel-item"
            style={{ 
              width: itemWidths[index] || 800,
              transition: 'width 0.3s ease-in-out'
            }}
            onClick={() => handleSlideClick(index)}
          >
            {item.type === 'image' ? (
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy"
                width={itemWidths[index] || 800}
                height={mediaHeight}
                draggable="false"
                style={{ transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out' }}
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                loading="lazy"
                width={itemWidths[index] || 800}
                height={mediaHeight}
                style={{ transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out' }}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </Slider>
    </div>
  )
}