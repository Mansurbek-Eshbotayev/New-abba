import React from "react";
import about from "../../assets/images/icons/about__img.png";
import { Link } from "react-router-dom";
import { InstaIcon, PlayIcon, TelegramIcon } from "../../assets/images/img/img";

export const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about__inner">
          <div className="about__left">
            <h3 className="about__title">Biz haqimizda</h3>
            <p className="about__text">
              Вас приветствует магазин электроники MacBro. У нас вы можете найти
              всю продукцию Apple. Уже более 14 лет мы консультируем и подбираем
              нужный гаджет для наших
            </p>
            <img className="about__img" src={about} alt="office" />
            <p className="about__text about__text--margin">
              Вас приветствует магазин электроники MacBro. У нас вы можете найти
              всю продукцию Apple. Уже более 14 лет мы консультируем и подбираем
              нужный гаджет для наших покупателей. За время нашего существования
            </p>
            <p className="about__text about__text--block">
              Вас приветствует магазин электроники MacBro. У нас вы можете найти
              всю продукцию Apple. Уже более 14 лет мы консультируем и подбираем
              нужный гаджет для наших покупателей. За время нашего существования
              на рынке мы успели оптимизировать доставку по межгороду, так что
              вы получите гаджет в течении трех дней, а если вам необходима
              доставка по городу мы доставим гаджет в течении 2 часов. 90% наших
              клиентов становятся постоянными покупателями, потому что мы даем
              гарантию на один год.
            </p>

            <div className="about__box">
              <Link className="about__link" to="/">
                Batafsil bilish
              </Link>
              <Link className="about__link about__link--video" to="/">
                Batafsil video <PlayIcon />
              </Link>
              <a
                className="about__link about__link--icon"
                href="https://xn--80affa3aj0al.xn--80asehdb/"
                target="blank"
              >
                <TelegramIcon />
              </a>
              <a
                className="about__link about__link--icon"
                href="https://www.instagram.com/"
                target="blank"
              >
                <InstaIcon />
              </a>
            </div>
          </div>
          <div className="about__right right">
            <img className="left__img" src={about} alt="office" />
          </div>
        </div>
      </div>
    </div>
  );
};
