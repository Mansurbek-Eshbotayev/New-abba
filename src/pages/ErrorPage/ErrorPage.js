import React from "react";
import Error from "../../assets/images/icons/error.png";
import { BigExBtn } from "../../assets/images/img/img";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <div className="carousel-container">
        <div className="error__inner">
          <img className="error__img" src={Error} alt="error" />
          <p className="error__text">server bilan xatoli yuz berdi (404)</p>
          <div className="error__box">
            <button className="error__btn" onClick={() => navigate("/")}>
              <BigExBtn />
              Asosiy menu qaytish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
