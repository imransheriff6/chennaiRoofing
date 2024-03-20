import React from "react";
import Slider from "react-slick";
import g1 from "../../../Images/g1.jpg";
import g2 from "../../../Images/g2.jpg";
import g3 from "../../../Images/g3.jpg";
import g4 from "../../../Images/g4.jpg";
import g5 from "../../../Images/g5.jpg";
import g6 from "../../../Images/g6.jpg";
import "./gallery.scss";
function ProductGallery() {
  const settings = {
    className: "center",
    centerMode: false,
    autoplay: true,
    // fade:true,
    autoplaySpeed: 1500,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 300,
    dot: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={g1} alt="Product 1" />
        </div>
        <div>
          <img src={g3} alt="Product 3" />
        </div>
        <div>
          <img src={g2} alt="Product 2" />
        </div>
        <div>
          <img src={g4} alt="Product 4" />
        </div>
        <div>
          <img src={g5} alt="Product 5" />
        </div>
        <div>
          {" "}
          <img src={g6} alt="Product 6" />
        </div>
      </Slider>
    </div>
  );
}

export default ProductGallery;
