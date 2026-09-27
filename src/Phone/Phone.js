import React from "react";
import "./Phone.css";
import { useState } from 'react';

const Phone = ({ active, setActive, onAdd134900 }) => {

    return(
         <div
      className={active ? "Phone modal-active" : "Phone"}
      onClick={() => setActive(false)}
    > 
    <div className="Tovar-content" onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={() => setActive(false)}>✕</button>

        <div className="product-image-wrapper">
          <img src="./phone-image (1).png" alt="TechZone Pro" className="laptop-img" />
        </div>

        <div className="product-header">
          <div>
            <h2 className="product-name">TechPhone 15 Ultra Max</h2>
            <p className="product-subtitle">Процессор нового поколения A20 Bionic</p>
          </div>
     
        </div>


        <div className="features-row">
          {/* Карточка 1 */}
          <div className="feature-card">
            <span className="feature-icon">📷 </span>
            <div className="feature-info">
              <strong>200MP</strong>
              <span>Основная камера</span>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="feature-card">
            <span className="feature-icon">🔋</span>
            <div className="feature-info">
              <strong>5500 mAh</strong>
              <span>Емкость аккумулятора</span>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="feature-card">
            <span className="feature-icon">🖥️</span>
            <div className="feature-info">
              <strong>6.9" Retina</strong>
              <span>Экран</span>
            </div>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⚖️</span>
            <div className="feature-info">
              <strong>≈185 г</strong>
              <span>Ультралегкий корпус</span>
            </div>
          </div>
        </div>


        <div className="description-block">
          <h4 className="desc-title">ОПИСАНИЕ</h4>
          <p className="desc-text">
           TechPhone 15 Ultra Max - титановый флагман с процессором нового поколения A20 Bionic, камерой 200MP, аккумулятором 5500 mAh и экраном 6.9" Retina. Идеальный баланс запредельной мощности, энергоэффективности и ультратонкого портативного формата для профессиональных задач любой сложности.
          </p>
        </div>


        <div className="bottom-actions">
          <div className="color-picker">
            <span className="picker-label">ЦВЕТ МОДЕЛИ</span>
            <div className="dots">
              <div className="dot active"></div>
              <div className="dot"></div>
            </div>
          </div>

          <div className="price-and-btn">
            <div className="price-group">
              <span className="old-price">179 900 ₽</span>
              <span className="new-price">149 900 ₽</span>
            </div>
            <div className="buttons">
              <button className="btn-cart"  onClick={() => {
                  if (onAdd134900) {
                    onAdd134900();
                  }
                  setActive(false);
                }}>Добавить в корзину</button>
              <button className="btn-heart"  onClick={() => setActive(false)}>❤️</button>
            </div>
          </div>
          
        </div>
       
      </div>
    </div>
  );

};
export default Phone;