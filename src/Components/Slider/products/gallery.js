import React from "react";
import Slider from "react-slick";
import g1 from "../../../Images/g1.jpg";
import g2 from "../../../Images/g2.jpg";
import g3 from "../../../Images/g3.jpg";
import g4 from "../../../Images/g4.jpg";
import g5 from "../../../Images/g5.jpg";
import g6 from "../../../Images/g6.jpg";
function ProductGallery() {
  const settings = {
    className: "center",
    centerMode: true,
    autoplay:true,
    autoplaySpeed:1500,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 300,
    dot:true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <img src={g1} alt="Product 1"/>
        <img src={g2} alt="Product 2"/>
        <img src={g3} alt="Product 3"/>
        <img src={g4} alt="Product 4"/>
        <img src={g5} alt="Product 5"/>
        <img src={g6} alt="Product 6"/>
      </Slider>
    </div>
  );
}

export default ProductGallery;
