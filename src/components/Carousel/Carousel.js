import React from "react";
import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import { CarouselCard } from "./CarouselCard";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
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
    <div className="swiper">
      <div className="carousel-container">
        <div className="carousel">
          <Slider {...settings}>
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
          </Slider>
        </div>
        <div className="swiper__card card">
          <ul className="card__list">
            <li className="card__item">
              <h3 className="card__tetle">Radiatorlar</h3>
            </li>
            <li className="card__item">
              <h3 className="card__tetle">Vanna va keramika mahsulotlari</h3>
            </li>
            <li className="card__item">
              <h3 className="card__tetle">Smesitel va kran mahsulotlari</h3>
            </li>
            <li className="card__item">
              <h3 className="card__tetle">Vanna va keramika mahsulotlari</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
