import React from "react";
import { Link } from "react-router-dom";

export const CarouselCard = () => {
  return (
    <>
      <div className="carousel__item">
        <h2 className="carousel__title">
          Interyeringizga mos smesitel tanlang
          <span className="carousel__span">+ bepul mutaxasis maslaxati</span>
        </h2>
        <span className="carousel__span">+ bepul mutaxasis maslaxati</span>
        <p className="carousel__text">
          ustry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of typeustry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type
        </p>
        <Link className="carousel__link" to="/smistitellar">
          Barcha smestitellar
        </Link>
      </div>
    </>
  );
};
