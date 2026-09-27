import React from "react";
import "./Smartorb.css"; // ← тоже с большой буквы, как файл на скриншоте

const Smartorb = ({ active, setActive, onAddToCart }) => {
  if (!active) return null;

  return (
    <div
      className={active ? "Smartorb modal-active" : "Smartorb"}
      onClick={() => setActive(false)}
    >
      <div className="Smartorb-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setActive(false)}>✕</button>

        <div className="product-image-wrapper">
          <img src="./smart-orb-image.png" alt="TechZone Pro" className="laptop-img" />
        </div>

        <div className="product-header">
          <div>
            <h2 className="product-name">TechHub Smart Orb</h2>
            <p className="product-subtitle">Умный ассистент с объёмным звуком 360°</p>
          </div>
        </div>

        <div className="features-row">
          <div className="feature-card">
            <span className="feature-icon">🔊 </span>
            <div className="feature-info">
              <strong>360°</strong>
              <span>Объёмный звук</span>
            </div>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🎤</span>
            <div className="feature-info">
              <strong>6 шт</strong>
              <span>Микрофонов</span>
            </div>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📡</span>
            <div className="feature-info">
              <strong>Wi-Fi 6E</strong>
              <span>Плюс Bluetooth 5.3</span>
            </div>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🏠️</span>
            <div className="feature-info">
              <strong>Zigbee</strong>
              <span>Умный дом</span>
            </div>
          </div>
        </div>

        <div className="description-block">
          <h4 className="desc-title">ОПИСАНИЕ</h4>
          <p className="desc-text">
            Погрузитесь в чистое звучание с умной колонкой нового поколения TechHub Smart Orb. Мощные динамики распределяют звук во всех направлениях, встроенный голосовой ассистент мгновенно реагирует на команды, а хаб управления Zigbee легко объединит все устройства вашего умного дома.
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
              <span className="old-price">24 900 ₽</span>
              <span className="new-price">19 900 ₽</span>
            </div>
            <div className="buttons">
              <button className="btn-cart"  onClick={() => setActive(false)}>
                Добавить в корзину
              </button>
              <button className="btn-heart" onClick={() => setActive(false)}>
                ❤️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smartorb;
