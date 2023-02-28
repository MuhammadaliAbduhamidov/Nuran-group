import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";

// import "aos/dist/aos.css";
import "../styles/slider.css";

function Sliders({uzbek, russian, english}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [gallery, setgallery] = useState([]);
    React.useEffect(() => {
      fetch("https://nuron.abba.uz/api/gallery/")
        .then((response) => response.json())
        .then((json) => setgallery(json));
    }, []);


  return (
    <div>
      <Slider {...settings} className={"slider__one"}>
        {gallery.map((item) => (
          <SliderItem data={item} english={english} uzbek={uzbek} russian={russian} />
        ))}
      </Slider>
    </div>
  );
}

export default Sliders;
