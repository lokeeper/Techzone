import React from "react";
import "./Tovar.css";

const Tovar = ({ active, setActive, onAdd249000 }) => {
  return (
    <div
      className={active ? "Tovar modal-active" : "Tovar"}
      onClick={() => setActive(false)}
    >
      <div className="Tovar-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setActive(false)}>✕</button>

        <div className="product-image-wrapper">
          <img src="./laptop-image.png" alt="TechZone Pro" className="laptop-img" />
        </div>

        <div className="product-header">
          <div>
            <h2 className="product-name">TechBook Pro 16 Extreme</h2>
            <p className="product-subtitle">Процессор нового поколения M3 Max</p>
          </div>
        </div>

        <div className="features-row">
          <div className="feature-card">
            <span className="feature-icon">💾</span>
            <div className="feature-info">
              <strong>32 ГБ</strong>
              <span>Оперативной памяти</span>
            </div>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔋</span>
            <div className="feature-info">
              <strong>22 ч</strong>
              <span>Автономной работы</span>
            </div>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🖥️</span>
            <div className="feature-info">
              <strong>Liquid XDR</strong>
              <span>Экран OLED 120 Гц</span>
            </div>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚖️</span>
            <div className="feature-info">
              <strong>~1.2 кг</strong>
              <span>Ультралегкий корпус</span>
            </div>
          </div>
        </div>

        <div className="description-block">
          <h4 className="desc-title">ОПИСАНИЕ</h4>
          <p className="desc-text">
            Откройте новые горизонты производительности с процессором нового поколения M3 Max. Идеальный баланс запредельной мощности, энергоэффективности и ультратонкого портативного формата для профессиональных задач любой сложности.
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
              <span className="old-price">279 900 ₽</span>
              <span className="new-price">249 900 ₽</span>
            </div>
            <div className="buttons">
              {/* Просто закрывает модалку */}
              <button className="btn-cart"onClick={() => {
                  if (onAdd249000) {
                    onAdd249000();
                  }
                  setActive(false);
                }}
              >
                Добавить в корзину
              </button>

              {/* Вызывает функцию, переданную из App */}
              <button
                className="btn-heart"
                onClick={() => 
                  setActive(false)
                }
              >
                ❤️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tovar
