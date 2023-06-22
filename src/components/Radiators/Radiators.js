import React from "react";
import Radiator from "../../assets/images/icons/radiator.png";
import { Link } from "react-router-dom";
import aris1 from "../../assets/images/icons/arist1.png";
import aris2 from "../../assets/images/icons/arist2.png";
import aris3 from "../../assets/images/icons/arist3.png";
import aris4 from "../../assets/images/icons/arist4.png";

export const Radiators = () => {
  return (
    <div className="radoatpr">
      <div className="radiator__top top">
        <div className="radoiator-container">
          <div className="top__left left">
            <h3 className="left__title">Радиаторлар</h3>
            <p className="left__text">
              ustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of n
            </p>
            <img className="left__img" src={Radiator} alt="radiator" />
            <div className="left__card">
              <h4 className="left__intro">Уникал дизайндаги радиаторлар</h4>
              <Link className="left__link" to="seeall">
                Barchasini ko’rish
              </Link>
            </div>
          </div>
          <div className="top__right right">
            <img className="right__img" src={Radiator} alt="radiator" />
          </div>
        </div>
      </div>
      <div className="radoatpr__down down">
        <div className="rado-container">
          <h3 className="down__title">Radiatorlarning turlari</h3>
          <ul className="down__list">
            <li className="down__item">
              <img className="down__img" src={aris1} alt="ariston" />
            </li>
            <li className="down__item">
              <img className="down__img" src={aris2} alt="ariston" />
            </li>
            <li className="down__item">
              <img className="down__img" src={aris3} alt="ariston" />
            </li>
            <li className="down__item">
              <img className="down__img" src={aris4} alt="ariston" />
            </li>
            <li className="down__item">
              <img className="down__img" src={aris1} alt="ariston" />
            </li>
            <li className="down__item">
              <img className="down__img" src={aris2} alt="ariston" />
            </li>
          </ul>
          <p className="down__text">
            Bir marta bosish orqali izdoshlaringiz bilan ko'proq baham ko'ring.
            Toplink barcha kontentingizga bir joyda ulanishni osonlashtiradi.
          </p>
        </div>
      </div>
    </div>
  );
};
