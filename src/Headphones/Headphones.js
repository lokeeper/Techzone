import React from "react";
import "./Headphones.css"
import { useState } from "react";
function Headphones({active,setActive}){

 return(
     <div
      className={active ? "Headphones modal-active" : "Headphones"}
      onClick={() => setActive(false)}
    >
      <div className="Headphones-content" onClick={(e) => e.stopPropagation()}>
        
       
        <button className="close-btn" onClick={() => setActive(false)}>✕</button>

       
        <div className="product-image-wrapper">
          <img src="./Headphones-image.png" alt="Headphones" className="laptop-img" />
        </div>

        <div className="product-header">
          <div>
            <h2 className="product-name">Aura Studio ANC</h2>
            <p className="product-subtitle">Активное шумоподавление нового поколения</p>
          </div>
     
        </div>


        <div className="features-row">
          <div className="feature-card">
            <span className="feature-icon">🎵</span>
            <div className="feature-info">
              <strong>Hi-Res</strong>
              <span>Золотой стандарт звука</span>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="feature-card">
            <span className="feature-icon">🔋</span>
            <div className="feature-info">
              <strong>40 ч</strong>
              <span>Автономная работа</span>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="feature-card">
            <span className="feature-icon">🔇</span>
            <div className="feature-info">
              <strong>ANC -45 дБ</strong>
              <span>Активное шумоподавление</span>
            </div>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⚖️</span>
            <div className="feature-info">
              <strong>≈280 г</strong>
              <span>Облегченная эргономика</span>
            </div>
          </div>
        </div>


        <div className="description-block">
          <h4 className="desc-title">ОПИСАНИЕ</h4>
          <p className="desc-text">
           Погрузитесь в чистейший звук с гибридной системой активного шумоподавления Aura Studio ANC. Премиальные материалы, динамические излучатели 40 мм и невероятный комфорт для многочасового прослушивания.
          </p>
        </div>

        {/* Цвет и кнопки (нижний блок) */}
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
              <span className="old-price">32 900 ₽</span>
              <span className="new-price">24 900 ₽</span>
            </div>
            <div className="buttons">
              <button className="btn-cart" onClick={() => setActive(false)}>Добавить в корзину</button>
              <button className="btn-heart"  onClick={() => setActive(false)}>❤️</button>
            </div>
          </div>
          
        </div>
       
      </div>
    </div>
 )

}
export default Headphones