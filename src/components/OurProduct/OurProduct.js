import React from "react";
import { ProductCard } from "./ProductCard";
import Smist from "../../assets/images/icons/pro1.png";
import Smist2 from "../../assets/images/icons/pro2.png";
import { ExitIcon, FilterIcon } from "../../assets/images/img/img";
import { NavLink, Route, Routes } from "react-router-dom";
import Logo from "../../assets/images/icons/site logo.svg";
import { useTranslation } from "react-i18next";

export const OurProduct = () => {
  const { t } = useTranslation();
  return (
    <div className="product">
      <div className="header-container">
        <div className="product__top top">
          <h2 className="top__title">{t("product.top")}</h2>
          <div className="top__info">
            <div className="top__wrap">
              <button className="top__filter">
                <FilterIcon /> Filtr saralash
              </button>
              <p className="otop__text">НАЙДЕНО ТОВАРОВ: 200</p>
            </div>
            <div className="top__mini mini">
              <button className="mini__btn">
                Radiator <ExitIcon />
              </button>
              <button className="mini__btn">
                Radiator <ExitIcon />
              </button>
            </div>
          </div>
          <div className="top__information information">
            <ul className="information__list">
              <li className="information__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav__link"
                  }
                  to="allproduct"
                >
                  Hamma
                </NavLink>
              </li>
              <li className="information__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav__link"
                  }
                  to="smestitles"
                >
                  Smesitellar
                </NavLink>
              </li>
              <li className="information__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav__link"
                  }
                  to="kran"
                >
                  Kranlar
                </NavLink>
              </li>
              <li className="information__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "nav__link"
                  }
                  to="baths"
                >
                  vannalar
                </NavLink>
              </li>
            </ul>
            <p className="otop__text">НАЙДЕНО ТОВАРОВ: 200</p>
          </div>
          <Routes>
            <Route path="allproduct" element={<h2>allproduct</h2>} />
            <Route path="smestitles" element={<h2>smestitles</h2>} />
            <Route path="kran" element={<h2>kran</h2>} />
            <Route path="baths" element={<h2>baths</h2>} />
          </Routes>
          <ul className="product__list">
            <ProductCard img={Smist} />
            <ProductCard img={Smist2} />
            <ProductCard img={Smist} />
            <ProductCard img={Smist2} />
            <ProductCard img={Smist} />
            <ProductCard img={Smist2} />
          </ul>
        </div>
        <div className="product__down down">
          <div className="down__info info">
            <div className="info__top">
              <img className="down__img" src={Logo} alt="site logo" />
              <span className="info__span">Btu Calculator</span>
            </div>
            <p className="info__text">
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <details className="info__detal">
              <summary className="info__sumari">Mehmonhona</summary>
              <span>Bronnima</span>
            </details>
            <details className="info__detal info__detal--margin">
              <summary className="info__sumari">Bitta oyna</summary>
              <span>Bronnima</span>
            </details>
            <button className="info__btn">Keyingi qadam</button>
          </div>
          <div className="down__question question">
            <div className="question__info">
              <img className="question__img" src={Logo} alt="site logo" />
              <h2 className="question__title">{t("product.question")}</h2>
              <form
                className="question__form"
                action="https://echo.htmlacademy.ru/courses"
              >
                <input
                  className="question__input"
                  type="text"
                  name="your_name"
                  placeholder="Name and name"
                  aria-label="Your name"
                />
                <input
                  className="question__input"
                  type="tel"
                  name="your_phone"
                  placeholder="Phone number"
                  aria-label="Your name"
                />

                <button className="question__btn">{t("product.sent")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
