import Slider, { Settings } from "react-slick";
import { useRef, useEffect } from "react";

const sliderRef = useRef<Slider>(null);

useEffect(() => {
  // Try to stop autoplay when component mounts
  if (sliderRef.current) {
    sliderRef.current.slickPause();
    sliderRef.current.slickSetOption('autoplay', false, true);
  }
}, []);

const settings: Settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  variableWidth: true,
  cssEase: "linear",
  draggable: true,
  swipe: true,
  touchThreshold: 5,
  touchMove: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 9999,
      settings: {
        autoplay: false
      }
    }
  ]
};

return (
  <div onMouseEnter={() => sliderRef.current?.slickPause()}>
    <Slider ref={sliderRef} {...settings}>
      {/* ... existing code ... */}
    </Slider>
  </div>
); 