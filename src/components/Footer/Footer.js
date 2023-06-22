import React from "react";
import Logo from "../../assets/images/icons/site logo.svg";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  SentBtn,
  TwitterIcon,
} from "../../assets/images/img/img";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__inner wrap">
          <div className="wrap__left left">
            <a className="left__link" href="index.html">
              <img src={Logo} alt="site logo" />
            </a>
            <p className="left__text">
              Kompaniyamiz haqida fikringiz yoki shikoyat va takliflaringizni
              yozib qoldiring
            </p>
            <p className="left__title">
              Oilangiz va do'stlar davrasi uchun halol dachalar
            </p>
          </div>

          <div className="wrap__middle middle">
            <form
              className="middle__form"
              action="https://echo.htmlacademy.ru/courses"
            >
              <input
                className="middle__input"
                type="email"
                name="your_email"
                placeholder="Enter your email here *"
              />

              <input
                className="middle__input middle__input--tel"
                type="tel"
                name="your_email"
                placeholder="phone number"
              />
              <button className="middle__btn">
                <SentBtn />
              </button>
            </form>
          </div>

          <div className="wrap__right right">
            <div className="right__top">
              <ul className="right__list">
                <li className="right__item">
                  <Link className="right__link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="right__item">
                  <Link className="right__link" to="/about">
                    Top tovarlar
                  </Link>
                </li>
                <li className="right__item">
                  <Link className="right__link" to="/about">
                    Yangiliklar
                  </Link>
                </li>
                <li className="right__item">
                  <Link className="right__link" to="/about">
                    FAQ
                  </Link>
                </li>
                <li className="right__item">
                  <Link className="right__link" to="/about">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <ul className="right__list">
                <li className="right__item">
                  <Link className="right__link" to="/about">
                    Calculator
                  </Link>
                </li>
                <li className="right__item">
                  <Link className="right__link" to="/about">
                    Radiator
                  </Link>
                </li>
                <li className="right__item">
                  <Link className="right__link" to="/about">
                    Smistitel
                  </Link>
                </li>
                <li className="right__item">
                  <Link className="right__link" to="/about">
                    News
                  </Link>
                </li>
                <li className="right__item">
                  <Link className="right__link" to="/about">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right__down">
              <div className="right__cover">
                <strong>United States</strong>
                <p className="right__text">
                  71 South Los Carneros Road, Goleta, California 93117
                  1-877-926-5184
                </p>
                <ul className="right__list">
                  <li className="right__item">
                    <Link className="right__link" to="/about">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="right__item">
                    <Link className="right__link" to="/about">
                      Terms of Service
                    </Link>
                  </li>
                  <li className="right__item">
                    <Link className="right__link" to="/about">
                      Compliance
                    </Link>
                  </li>
                  <li className="right__item">
                    <Link className="right__link" to="/about">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="right__cover">
                <strong>United States</strong>
                <p className="right__text">
                  71 South Los Carneros Road, Goleta, California 93117
                  1-877-926-5184
                </p>
                <ul className="right__list">
                  <li className="right__item">
                    <Link className="right__link" to="/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="right__item">
                    <Link className="right__link" to="/">
                      Terms of Service
                    </Link>
                  </li>
                  <li className="right__item">
                    <Link className="right__link" to="/">
                      Compliance
                    </Link>
                  </li>
                  <li className="right__item">
                    <Link className="right__link" to="/">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="wrap__icon icon">
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
      </div>
      <div className="footer__final final">
        <div className="footer-container">
          <div className="final__inner">
            <p className="final__ext">
              Copyright © Savia | Designed by <span>abba marketing</span>
            </p>
            <p className="final__ext">
              - Powered by <span>ABBA</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
