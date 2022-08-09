/* eslint-disable jsx-a11y/anchor-is-valid */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../Assets/Images/Slides/1.jpg";
import slide2 from "../../Assets/Images/Slides/2.jpg";
import slide3 from "../../Assets/Images/Slides/3.jpg";
import slide4 from "../../Assets/Images/Slides/4.jpg";
import slide5 from "../../Assets/Images/Slides/5.jpg";
import slide6 from "../../Assets/Images/Slides/6.jpg";

export default function ImageSlider() {
  return (
    <>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={slide1} alt="" />
        </div>
        <div>
          <img src={slide2} alt="" />
        </div>
        <div>
          <img src={slide3} alt="" />
        </div>
        <div>
          <img src={slide4} alt="" />
        </div>
        <div>
          <img src={slide5} alt="" />
        </div>
        <div>
          <img src={slide6} alt="" />
        </div>
      </Carousel>
    </>
  );
}
