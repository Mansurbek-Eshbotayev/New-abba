import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../assets/images/img/img";

export const Connect = () => {
  return (
    <div className="connect">
      <div className="smistitel-container">
        <div className="connect__inner">
          <div className="connect__info info">
            <div className="info__lift">
              <h3 className="info__title">Savollaringiz bormi?</h3>
              <div className="info__icon icon">
                <a className="icon__tel" href="/#">
                  +998 99 011 89 34
                </a>
                <ul className="icon__list">
                  <li className="icon__item">
                    <a
                      className="icon__link"
                      href="https://ru-ru.facebook.com/"
                      target="blank"
                    >
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="icon__item">
                    <a
                      className="icon__link"
                      href="https://twitter.com/"
                      target="blank"
                    >
                      <TwitterIcon />
                    </a>
                  </li>
                  <li className="icon__item">
                    <a
                      className="icon__link"
                      href="https://www.instagram.com/"
                      target="blank"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li className="icon__item">
                    <a
                      className="icon__link"
                      href="https://www.instagram.com/"
                      target="blank"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="info__right right">
              <form
                className="right__form"
                action="https://echo.htmlacademy.ru/courses"
              >
                <input
                  className="right__input"
                  type="text"
                  name="your_name"
                  placeholder="Name and surname"
                  aria-label="Entr Name"
                />

                <input
                  className="right__input"
                  type="tel"
                  name="your_phone"
                  placeholder="Phone number"
                  aria-label="Entr Phone"
                />

                <button className="right__sent">Yuborish</button>
              </form>
            </div>
          </div>
          <div className="connect__box information">
            <h3 className="information__title">
              Qulaylik uchun. Saviya siz uchun!
            </h3>
            <p className="information__text">
              5 mahal berish kerak Новости и полезьные блоги Неолите 5 mahal
              berish kerak Новости и полезьные блоги
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
