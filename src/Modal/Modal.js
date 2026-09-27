import React from "react";
import "./Modal.css";

const Modal = ({ active, setActive, count }) => {
  return (
    <div
      className={active ? "Modal modal-active" : "Modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Шапка: Корзина + голубая кнопка с количеством */}
        <div className="modal-header">
          <h2 className="garbage">Корзина</h2>

          <button className="count-btn" type="button">
            {count || 0} товара
           
          </button>

          <img
            src="/icon-x.png"
            alt="Закрыть"
            className="close-icon"
            onClick={() => setActive(false)}
          />
        </div>

        {/* Линия ПОД шапкой — закрывает блок */}
        <hr className="hr-line-bottom" />

        {/* Дальше будет список товаров */}
        <div style={{ color: "#fff", paddingTop: "20px" }}>
          Здесь будут товары...
        </div>
      </div>
    </div>
  );
};

export default Modal;
