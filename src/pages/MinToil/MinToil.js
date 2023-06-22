import React from "react";
import Minsm from "../../assets/images/icons/minism.png";

export const MinToil = () => {
  return (
    <div className="toil">
      <div className="smestitel">
        <div className="smistitel-container">
          <div className="smestitel__inner">
            <h3 className="smestitel__title">Toilet</h3>
            <h4 className="smestitel__title smestitel__title--smis">Toilet</h4>
            <p className="smestitel__text">
              ustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of n
            </p>

            <ul className="smestitel__list">
              <li className="smestitel__item">
                <a className="smestitel__link smestitel__link--one" href="/#">
                  Высокое качество материалов
                </a>
              </li>
              <li className="smestitel__item">
                <a className="smestitel__link smestitel__link--two" href="/#">
                  Многократный цикл закрытия открытия
                </a>
              </li>
              <li className="smestitel__item">
                <a className="smestitel__link smestitel__link--thre" href="/#">
                  Долговечность и экологичность
                </a>
              </li>
              <li className="smestitel__item ">
                <a className="smestitel__link smestitel__link--four" href="/#">
                  Соответствие международным стандартам
                </a>
              </li>
              <li className="smestitel__item">
                <a className="smestitel__link smestitel__link--five" href="/#">
                  Соответствие международным стандартам
                </a>
              </li>
              <li className="smestitel__item">
                <a className="smestitel__link smestitel__link--six" href="/#">
                  Простота монтажа и обслуживания
                </a>
              </li>
            </ul>
            <img className="smistitel__img" src={Minsm} alt="vanna" />
            <div className="smistitel__prise prise">
              <h4 className="prise__title">Saviya smesitellari</h4>

              <p className="smistitel__text">
                DIONIS - торговая марка, предалагающая широкий ассортимент
                товаров среднего ценового сегмента, который
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
