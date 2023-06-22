import React from "react";
import Logo from "../../assets/images/icons/site logo.svg";
import {
  Addition,
  ButtonCall,
  ButtonExit,
  ButtonIcon,
  ButtonSave,
  ButtonSeaarch,
  Catalog,
  Radiator,
  Thing,
  Toil,
  Vanna,
} from "../../assets/images/img/img";
import { useState } from "react";
import { Navbar } from "../Navbar";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import { Search } from "../Search/Search";
import { Present } from "../Present/Present";

export const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [proModal, setProModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const OpenNavbar = () => {
    setIsOpen(!isOpen);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  const customStyles = {
    content: {
      width: "684px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  };
  const custom = {
    content: {
      width: "906px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="header-container">
          <div className="header__inner inner">
            <button className="inner__open" onClick={() => OpenNavbar()}>
              {isOpen ? <ButtonExit /> : <ButtonIcon />}
            </button>
            <a className="header__link" href="index.html">
              <img className="header__logo" src={Logo} alt="site logo" />
            </a>
            <a
              className="inner__open inner__open--call"
              href="tel:998992773230"
            >
              <ButtonCall />
            </a>

            {isOpen && <Navbar />}

            <div className="header__nav nav">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav__link"
                    }
                    to="/about"
                  >
                    {t("header.nav.about")}
                  </NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav__link"
                    }
                    to="/calculator"
                  >
                    {t("header.nav.kalkulator")}
                  </NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav__link"
                    }
                    to="/storys"
                  >
                    {t("header.nav.story")}
                  </NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav__link"
                    }
                    to="/whyus"
                  >
                    {t("header.nav.why")}
                  </NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "nav__link"
                    }
                    to="/whyus"
                  >
                    {t("header.nav.sertify")}
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="inner__right connectt">
              <select
                className="connectt__select"
                name="language"
                defaultValue={i18n.language}
                onChange={(evt) => {
                  i18n.changeLanguage(evt.target.value);
                  localStorage.setItem("lang", evt.target.value);
                }}
              >
                <option value="en">En</option>
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
              </select>

              <button
                className="connectt__search"
                onClick={() => setModalIsOpen(true)}
              >
                <ButtonSeaarch />
              </button>

              <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={closeModal}
              >
                <Search />
              </Modal>

              <button className="connectt__save">
                <ButtonSave />
              </button>

              <a className="connectt__call" href="tel:998992773230">
                {t("header.nav.call")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header__down category">
        <div className="header-container">
          <ul className="category__list">
            <li className="category__item">
              <Link className="category__link" to="/error">
                <Catalog className="category__radiator" />
                {t("header.nav.catalog")}
              </Link>
            </li>
            <li className="category__item">
              <Link className="category__link" to="/error">
                <Radiator className="category__radiator" />
                {t("header.nav.radiators")}
              </Link>
            </li>
            <li className="category__item">
              <Link className="category__link" to="/smestitlel">
                <Thing className="category__thing" />
                {t("header.nav.smesitel")}
              </Link>
            </li>
            <li className="category__item">
              <Link className="category__link" to="/bath">
                <Vanna className="category__bath" />
                {t("header.nav.bath")}
              </Link>
            </li>
            <li className="category__item">
              <Link className="category__link" to="/toil">
                <Toil className="category__toil" />
                {t("header.nav.toilet")}
              </Link>
            </li>
            <li className="category__item">
              <button
                className="category__link"
                onClick={() => setProModal(true)}
              >
                <Addition className="category__addition" />
                {t("header.nav.custom")}
              </button>
            </li>
          </ul>

          <Modal
            isOpen={proModal}
            style={custom}
            onRequestClose={() => setProModal(false)}
          >
            <Present setModal={setProModal} />
          </Modal>
        </div>
      </div>
    </header>
  );
};
