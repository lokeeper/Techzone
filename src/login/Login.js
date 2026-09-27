import { useState } from 'react';
import './login.css';

const Login = ({ active, setActive }) => {
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState('');      // строка, а не false
  const [password, setPassword] = useState('');  // строка, а не false

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setHasError(true);
      return;
    }
    setHasError(false);
    console.log('Войти:', email, password);
    // тут будет запрос на сервер
  };

  return (
    <div
      className={active ? 'login modal-active' : 'login'}
      onClick={() => setActive(false)}
    >
      <div className="login-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="garbage">Авторизация</h2>
          <img
            src="/icon-x.png"
            alt="Закрыть"
            className="close-icon"
            onClick={() => setActive(false)}
          />
        </div>
        <hr className="hr-line-bottom" />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введите почту/номер телефона"
            value={email}
            onChange={handleEmailChange}
            style={{
              border: email.trim().length > 0 ? '1px solid #ccc' : '1px solid red',
            }}
          />
          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={handlePasswordChange}
            style={{
              border: password.trim().length > 0 ? '1px solid #ccc' : '1px solid red',
            }}
          />

          {hasError && (
            <p style={{ color: 'red', fontSize: '12px' }}>
              Заполните все поля
            </p>
          )}

          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
