import Slider from "react-slick";
import Banner1 from "../../../Images/Banner 1.jpg";
import Banner2 from "../../../Images/Banner 2.jpg";
function BannerSlider() {
  const settings = {
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
          <img src={Banner1} alt="Banner 1" />
          <img src={Banner2} alt="Banner 2" />
      </Slider>
    </div>
  );
}
export default BannerSlider;
