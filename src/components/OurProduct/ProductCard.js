import React from "react";
import { Link } from "react-router-dom";
import { SaveBtn } from "../../assets/images/img/img";

export const ProductCard = ({ img }) => {
  return (
    <li className="product__item">
      <img className="product__img" src={img} alt="smistitel" />
      <h3 className="product__title">Radiator 500 K pro max</h3>
      <span className="product__span">Radiatorlar</span>
      <div className="product__box">
        <Link className="product__link" to="batafsil">
          Batafsil
        </Link>
        <button className="product__btn">
          <SaveBtn />
        </button>
      </div>
    </li>
  );
};
