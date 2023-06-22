import React from "react";
import { LocationIcon, ManIcon } from "../../assets/images/img/img";
import "../../shared/Detail";

export const Showing = () => {
  return (
    <div className="showing">
      <div className="smistitel-container">
        <div className="showing__info">
          <h3 className="showing__title">Bizning show room</h3>
          <p className="shiwing__text">
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of n
          </p>

          <div className="showing__box box">
            <p className="box__text">
              <ManIcon /> 9:00 dan 19:00 gacha
            </p>
            <p className="box__text box__text--width">
              <LocationIcon /> ustry. Lorem Ipsum has been the industry's
              standard dummy text ever
            </p>
            <p className="box__text box__text--block">
              <ManIcon /> 9:00 dan 19:00 gacha
            </p>
          </div>

          <div className="showing__links">
            <button className="showing__btn">Manzilimiz</button>
            <button className="showing__btn showing__btn--block">
              Biz bilan aloqa
            </button>
          </div>
        </div>
        <div className="showing__open">
          <details className="showing__detal detal">
            <summary className="detal__summary">
              Вы продаете только оригинальные телефоны?
            </summary>
            <p className="detal__text">
              Да. Компания представляет бренд Apple на территории Узбекистана и
              реализует исключительно оригинальную продукцию. Кроме того, мы
              предоставляем гарантийное сервисное обслуживание покупателям
              смартфонов, ноутбуков, планшетов и другой электроники из нашего
              интернет-магазина.
            </p>
          </details>
          <details className="showing__detal detal">
            <summary className="detal__summary">
              Вы продаете только оригинальные телефоны?
            </summary>
            <p className="detal__text">
              Да. Компания представляет бренд Apple на территории Узбекистана и
              реализует исключительно оригинальную продукцию. Кроме того, мы
              предоставляем гарантийное сервисное обслуживание покупателям
              смартфонов, ноутбуков, планшетов и другой электроники из нашего
              интернет-магазина.
            </p>
          </details>
          <details className="showing__detal detal">
            <summary className="detal__summary">
              Вы продаете только оригинальные телефоны?
            </summary>
            <p className="detal__text">
              Да. Компания представляет бренд Apple на территории Узбекистана и
              реализует исключительно оригинальную продукцию. Кроме того, мы
              предоставляем гарантийное сервисное обслуживание покупателям
              смартфонов, ноутбуков, планшетов и другой электроники из нашего
              интернет-магазина.
            </p>
          </details>
          <details className="showing__detal detal">
            <summary className="detal__summary">
              Вы продаете только оригинальные телефоны?
            </summary>
            <p className="detal__text">
              Да. Компания представляет бренд Apple на территории Узбекистана и
              реализует исключительно оригинальную продукцию. Кроме того, мы
              предоставляем гарантийное сервисное обслуживание покупателям
              смартфонов, ноутбуков, планшетов и другой электроники из нашего
              интернет-магазина.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};
