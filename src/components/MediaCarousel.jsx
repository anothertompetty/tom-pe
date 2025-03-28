import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MediaCarousel.css'

export function MediaCarousel({ items }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 9000,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 1,
    useCSS: true,
    useTransform: true,
  }

  return (
    <div className="media-carousel">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div 
            key={index} 
            className="carousel-item"
            style={{ width: item.width, cursor: 'grab' }}
          >
            {item.type === 'image' ? (
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy"
                width={item.width}
                height={400}
                draggable="false"
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                loading="lazy"
                width={item.width}
                height={400}
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