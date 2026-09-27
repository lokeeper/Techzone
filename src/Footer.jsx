import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-col">
          <div className="footer-logo-row">
            <img src="/Frame.png" alt="Logo icon" className="logo-icon" />
            <a href="/" className="logo-text">TECHZONE</a>
          </div>
          <p className="vash">
            Ваш премиальный гид в мире электроники и умных технологий. Лучшие цены, оригинальный импорт и надежная гарантия.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="k">Каталог</h3>
          <ul>
            <li>Смартфоны и планшеты</li>
            <li>Ноутбуки и ПК</li>
            <li>Аудиосистемы</li>
            <li>Умный дом</li>
            <li>Аксессуары</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="k">Покупателям</h3>
          <ul>
            <li>Условия доставки</li>
            <li>Способы оплаты</li>
            <li>Обмен и возврат</li>
            <li>Бонусная программа</li>
            <li>Кредит и рассрочка</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="k">Компания</h3>
          <ul>
            <li>О магазине TechZone</li>
            <li>Наши контакты</li>
            <li>Вакансии</li>
            <li>Партнёрам</li>
            <li>Политика конфиденциальности</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
