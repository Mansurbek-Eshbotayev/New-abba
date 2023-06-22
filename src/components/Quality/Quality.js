import React from "react";
import { Link } from "react-router-dom";
import {
  CarIcon,
  HandIcon,
  HeardIcon,
  SettingIcon,
} from "../../assets/images/img/img";
import Sunny from "../../assets/images/icons/sunny.png";

export const Quality = () => {
  return (
    <div className="quality">
      <div className="radoiator-container">
        <div className="quality__inner">
          <div className="quality__left left">
            <h3 className="left__title">ПРЕИМУЩЕСТВо НАШИХ РАДИАТОРОВ</h3>
            <ul className="left__list">
              <li className="left__item">
                <a className="left__link" href="index.html">
                  <HeardIcon /> Garantiya
                </a>
              </li>
              <li className="left__item">
                <a className="left__link" href="index.html">
                  <SettingIcon /> Простота в монтажеи Универсальность
                </a>
              </li>{" "}
              <li className="left__item">
                <a className="left__link" href="index.html">
                  <HandIcon /> Простотав использовании
                </a>
              </li>{" "}
              <li className="left__item">
                <a className="left__link" href="index.html">
                  <CarIcon /> Простота в монтажеи Универсальность
                </a>
              </li>
            </ul>
            <Link className="left__sent" to="aboutus">
              Korxonamiz haqida ma’lumotni bilsih
            </Link>
          </div>
          <div className="quality__middle middle">
            <h3 className="middle__title">ПРЕИМУЩЕСТВАНАШИХ РАДИАТОРОВ</h3>
            <ul className="middle__list">
              <li className="middle__item">
                <a className="middle__link" href="index.html">
                  <HeardIcon /> Garantiya
                </a>
              </li>
              <li className="middle__item">
                <a className="middle__link" href="index.html">
                  <SettingIcon /> Простота в монтажеи Универсальность
                </a>
              </li>{" "}
              <li className="middle__item">
                <a className="middle__link" href="index.html">
                  <HandIcon /> Простотав использовании
                </a>
              </li>{" "}
              <li className="middle__item">
                <a className="middle__link" href="index.html">
                  <CarIcon /> Простота в монтажеи Универсальность
                </a>
              </li>
            </ul>
            <Link className="middle__sent" to="aboutus">
              Korxonamiz haqida ma’lumotni bilsih
            </Link>
          </div>
          <div className="quality__right right">
            <img className="right__img" src={Sunny} alt="ariston" />
          </div>
        </div>
      </div>
    </div>
  );
};
