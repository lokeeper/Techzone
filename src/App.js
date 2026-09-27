import { useState } from 'react';
import './App.css';
import Login from './login/Login';
import NotFound from './NotFound/NotFound';
import Modal from './Modal/Modal'; 
import Tovar from './more/Tovar';
import Phone from './Phone/Phone';
import Headphones from './Headphones/Headphones';
import Smartorb from './smartorb/smartorb';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Компонент главной страницы — выносим сюда весь контент, чтобы роутинг работал корректно
function HomePage({
  setModalActive,
  setTovarActive,
  setPhoneActive,
  setHeadphonesActive,
  setSmartorbActive,
  setloginActive,
  spantext,
  setSpanText,
  sbros
}) {
  const HandleClick = () => setSpanText(prev => prev + 249000);
  const HandleClicks = () => setSpanText(prev => prev + 134900);
  const HandleClickd = () => setSpanText(prev => prev + 29900);
  const HandleClicka = () => setSpanText(prev => prev + 12400);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">
          <Link to="/" className="logo-text">TECHZONE</Link>
          <img src="/Frame.png" alt="Logo icon" className="logo-icon" />
        </div>

        <div className="header-search">
          <span className="search-icon"></span>
          <input
            type="text"
            placeholder="Поиск гаджетов, брендов, категорий..."
            className="search-input"
          />
        </div>

        <div className="header-actions">
          <div className="action-item" onClick={() => setloginActive(true)}>
            <img src="/Vector.png" alt="Icon" className="action-icon" />
            <span>Войти</span>
          </div>
          <div className="action-item">
            <img src="/hurt.png" alt="Icon" className="action-icon" />
            <span>Избранное</span>
          </div>
          <div
            className="action-item action-item--cart"
   
          >
            <img
              src="/Frame (1).png"
              alt="Cart icon"
              className="action-icon1"
              onClick={() => setModalActive(true)}
            />
            <div className="cart-content">
              <span className="cart-label" onClick={() => setModalActive(true)}>Корзина</span>
              <span className="cart-total" onClick={() => setModalActive(true)}>{spantext}₽</span>
              <button onClick={sbros} className="sbros">Сброс</button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="Exclusive">
          <div className="Nout">
            <p className="new">Новый ультрабук</p>
            <p className="Tech">TechZone Pro</p>
            <p className="pocori">
              Покорите новые вершины производительности с процессором нового
              поколения M3 Max, OLED‑экраном 120 Гц и весом всего 1.1 кг.
              Будущее уже здесь.
            </p>
            <div className="hero-actions">
              <button className="buy" onClick={HandleClick}>
                Купить сейчас
              </button>
              {/* Пример перехода на другую страницу — замени путь на нужный */}
              <Link to="/NotFound" style={{ display: 'block', textDecoration: 'none' }}>
                <button className="more" type="button">Все хиты</button>
              </Link>
            </div>
            <div className="nav">
              <div className="gb">
                <h3>32 ГБ</h3>
                <span>Объединенной памяти</span>
              </div>
              <div className="hours">
                <h3>22 ч</h3>
                <span>Автономной работы</span>
              </div>
              <div className="display">
                <h3>Liquid XDR</h3>
                <span>Невероятный дисплей</span>
              </div>
            </div>
          </div>
          <img
            src="/featured-hero-image.png"
            className="comp"
            alt="Hero Image"
          />
        </section>

        <section className="firma">
          <h4>INTEL</h4>
          <h4>APPLE</h4>
          <h4>SONY</h4>
          <h4>SAMSUNG</h4>
          <h4>XIAOMI</h4>
          <h4>ASUS</h4>
        </section>

        <section className="Hit">
          <div className="header-row">
            <div className="title-block">
              <h4 className="Nazv">Хиты продаж</h4>
              <p className="samie">
                Самые востребованные девайсы этой недели с гарантией качества
              </p>
            </div>
            <button className="vse">
              <img src="/Vector (3).png" alt="" /> Все хиты
            </button>
          </div>

          <div className="Carts">
            <div
              className="CartN"
              onClick={() => setTovarActive(true)}
            >
              <img src="/Numpad.png" className="img" alt="" />
              <p className="TechT">TechBook Pro 16 Extreme</p>
              <p className="infos">
                M3 Max Ultra, 32GB RAM, 1TB SSD, 120Hz Liquid Retina XDR OLED
              </p>
              <p className="price">249 900₽</p>
              <img
                src="/add-garbage.png"
                className="garbage"
                onClick={HandleClick}
                alt=""
              />
            </div>

            <div
              className="CartP"
              onClick={() => setPhoneActive(true)}
            >
              <img src="/Phone.png" className="img" alt="" />
              <p className="TechT">TechPhone 15 Ultra Max</p>
              <p className="infos">
                Super Retina OLED 6.9", 200MP Camera, 512GB, Titanium Frame,
                Cyber Black
              </p>
              <p className="price">134 900₽</p>
              <img
                src="/add-garbage.png"
                className="garbage"
                onClick={HandleClicks}
                alt=""
              />
            </div>

            <div
              className="CartA"
              onClick={() => setHeadphonesActive(true)}
            >
              <img src="/Airpods.png" className="img" alt="" />
              <p className="TechT">AuraSound Studio ANC</p>
              <p className="infos">
                Hi‑Res Audio, Hybrid ANC 45dB, 60h Battery, Spatial Head
                Tracking
              </p>
              <p className="price">29 900₽</p>
              <img
                src="/add-garbage.png"
                className="garbage"
                onClick={HandleClickd}
                alt=""
              />
            </div>

            <div
              className="CartB"
              onClick={() => setSmartorbActive(true)}
            >
              <img src="/bols.png" className="img" alt="" />
              <p className="TechT">TechHub Smart Orb</p>
              <p className="infos">
                Zigbee 3.0, voice assistant, home automation master controller
              </p>
              <p className="price">12 400₽</p>
              <img
                src="/add-garbage.png"
                className="garbage"
                onClick={HandleClicka}
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="podpiska">
          <div className="block">
            <h2>Получайте закрытые скидки первыми</h2>
            <p className="podpishi">
              Подпишитесь на нашу рассылку и получите промокод на скидку 1 000 ₽ на
              первую покупку
            </p>
            <div className="pole">
              <input
                className="email"
                type="email"
                placeholder="Введите ваш Email"
              />
    <Link to="/NotFound" style={{margin:'10px', textDecoration: 'none' }}>
                <button className="podp" type="button">Подписаться</button>
              </Link>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  const [ModalActive, setModalActive] = useState(false);
  const [TovarActive, setTovarActive] = useState(false);
  const [PhoneActive, setPhoneActive] = useState(false);
  const [HeadphonesActive, setHeadphonesActive] = useState(false);
  const [SmartorbActive, setSmartorbActive] = useState(false);
  const [spantext, setSpanText] = useState(0);
  const [loginActive, setloginActive] = useState(false);

  const sbros = () => setSpanText(0);

  return (
    <BrowserRouter>
      {/* Модальные окна рендерятся поверх всего приложения */}
      <Modal active={ModalActive} setActive={setModalActive} />
      <Tovar
        active={TovarActive}
        setActive={setTovarActive}
        onAdd249000={() => setSpanText((prev) => prev + 249000)}
      />
      <Phone
        active={PhoneActive}
        setActive={setPhoneActive}
        onAdd134900={() => setSpanText((prev) => prev + 134900)}
      />
      <Headphones
        active={HeadphonesActive}
        setActive={setHeadphonesActive}
      />
      <Smartorb
        active={SmartorbActive}
        setActive={setSmartorbActive}
      />
      <Login
        active={loginActive}
        setActive={setloginActive}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setModalActive={setModalActive}
              setTovarActive={setTovarActive}
              setPhoneActive={setPhoneActive}
              setHeadphonesActive={setHeadphonesActive}
              setSmartorbActive={setSmartorbActive}
              setloginActive={setloginActive}
              spantext={spantext}
              setSpanText={setSpanText}
              sbros={sbros}
            />
          }
        />



        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
