import { Link } from 'react-router-dom';
import '../App.css';

function NotFound() {
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: '#0f0f11',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1>404 — Страница не найдена</h1>
      <p style={{ marginBottom: '2rem' }}>Кажется, мы не смогли найти эту страницу.</p>

      {/* Кнопка возврата на главную */}
      <Link to="/">
        <button className="back-home-btn" style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#00F0FF',
          color: '#0f0f11',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: '600'
        }}>
          Вернуться на главную
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
