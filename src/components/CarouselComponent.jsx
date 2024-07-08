// CarouselComponent.js
import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-4">
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card key={index} title={item.title} slug={item.slug} intro={item.intro} />
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
