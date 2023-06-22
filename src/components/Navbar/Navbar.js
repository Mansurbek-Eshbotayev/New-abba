import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const LangValue = useRef();

  const HandleClick = (evt) => {
    i18n.changeLanguage(evt.target.value);
    localStorage.setItem("lang", evt.target.value);
  };
  return (
    <>
      <div className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link className="navbar__link" to="/about">
              {t("header.nav.about")}
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/product">
              {t("header.nav.products")}
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/news">
              {t("header.nav.news")}
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/connact">
              {t("header.nav.call")}
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to="/whyus">
              {t("header.nav.why")}
            </Link>
          </li>
        </ul>
        <div className="navbar__down">
          <span className="navbar__title">Choice Language</span>
          <form className="navbar__select" onClick={HandleClick}>
            <label className="navbar__label">
              <input
                ref={LangValue}
                defaultValue={"uz"}
                className="visually-hidden"
                type="radio"
                name="lang"
              />
              <span className="navbar__span">Uz</span>
            </label>
            <label className="navbar__label">
              <input
                ref={LangValue}
                defaultValue={"ru"}
                className="visually-hidden"
                type="radio"
                name="lang"
              />
              <span className="navbar__span">Ru</span>
            </label>
            <label className="navbar__label">
              <input
                className="visually-hidden"
                type="radio"
                name="lang"
                ref={LangValue}
                defaultValue={"en"}
              />
              <span className="navbar__span">En</span>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};
