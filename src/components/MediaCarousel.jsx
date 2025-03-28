import Slider from 'react-slick'
import { useRef, useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MediaCarousel.css'

export function MediaCarousel({ items }) {
  const sliderRef = useRef(null)
  const [itemWidths, setItemWidths] = useState({})

  useEffect(() => {
    // Function to get natural width of media
    const getMediaWidth = (src, type) => {
      return new Promise((resolve) => {
        if (type === 'image') {
          const img = new Image()
          img.onload = () => {
            // Calculate width maintaining aspect ratio with 500px height
            const aspectRatio = img.naturalWidth / img.naturalHeight
            const width = Math.round(500 * aspectRatio)
            resolve(width)
          }
          img.src = src
        } else {
          // For videos, load metadata to get dimensions
          const video = document.createElement('video')
          video.onloadedmetadata = () => {
            // Calculate width maintaining aspect ratio with 500px height
            const aspectRatio = video.videoWidth / video.videoHeight
            const width = Math.round(500 * aspectRatio)
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
  }, [items])

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
            style={{ width: itemWidths[index] || 800 }}
            onClick={() => handleSlideClick(index)}
          >
            {item.type === 'image' ? (
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy"
                width={itemWidths[index] || 800}
                height={500}
                draggable="false"
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                loading="lazy"
                width={itemWidths[index] || 800}
                height={500}
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