import "./slider.scss";
import { Swiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Slider = ({ children, slidesToShow }) => {
  return (
    <div className="slider">
      <div className="sliderContainer">
        <Swiper slidesPerView={slidesToShow} modules={[Navigation]} navigation>
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
