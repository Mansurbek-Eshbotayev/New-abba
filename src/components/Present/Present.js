import React from "react";
import { ExBtn } from "../../assets/images/img/img";

export const Present = ({ setModal }) => {
  return (
    <div className="present">
      <button className="present__ex" onClick={() => setModal(false)}>
        <ExBtn />
      </button>
      <h3 className="present__title">
        Sayt orqali radiator harid qiling va{" "}
        <span>3% chegirmaga ega bo’ling!</span>
      </h3>
      <p className="present__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
      </p>
      <div className="present__box">
        <button className="present__btn">sotib olmoqchiman</button>
        <button className="present__btn present__btn--blu">Hozir emas</button>
      </div>
    </div>
  );
};
