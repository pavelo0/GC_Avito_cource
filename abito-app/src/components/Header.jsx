import './Header/Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <a href="./index.html" className="header-logo">
            <img src="/images/logo.svg" alt="logo-icon" />
            <span>Abito</span>
          </a>
          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>
          <div className="header-burger">
            <img src="/images/burger.svg" alt="burger-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};
