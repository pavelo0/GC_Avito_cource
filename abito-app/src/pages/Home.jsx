import { Card } from '../components/Card/Card';
import { Header } from '../components/Header';
import { cardArr } from '../components.js';

export const Home = () => {
  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" />
              <button className="btn btn-primary search-btn">
                <img
                  src="/images/search.svg"
                  alt="search-icon"
                  className="search-btn-icon"
                />
                <span className="search-btn-text">Найти</span>
              </button>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main-title">Рекомендации для Вас</h2>

                <div className="content-main-list">
                  {cardArr.map((card) => (
                    <Card
                      key={card.id}
                      title={card.title}
                      price={card.price}
                      address={card.address}
                      date={card.date}
                      image={card.image}
                    />
                  ))}
                </div>
              </div>
              <div className="content-side">
                <h3 className="content-side-title">Сервисы и услуги</h3>

                <div className="content-side-box">
                  <div className="content-side-list">
                    <div className="content-side-list-item">
                      <img
                        className="content-side-list-item-image"
                        src="/images/delivery.svg"
                        alt="delivery-icon"
                      />
                      <h5 className="content-side-list-item-title">Доставка</h5>
                      <p className="content-side-list-item-text">
                        Проверка при получении и возможность бесплатно вернуть товар
                      </p>
                    </div>

                    <div className="content-side-list-item">
                      <img
                        className="content-side-list-item-image"
                        src="/images/car.svg"
                        alt="car-icon"
                      />
                      <h5 className="content-side-list-item-title">Автотека</h5>
                      <p className="content-side-list-item-text">
                        Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и
                        ремонтах
                      </p>
                    </div>

                    <div className="content-side-list-item">
                      <img
                        className="content-side-list-item-image"
                        src="/images/heart.svg"
                        alt="heart-icon"
                      />
                      <h5 className="content-side-list-item-title">
                        Онлайн-бронирование жилья
                      </h5>
                      <p className="content-side-list-item-text">
                        Посуточная аренда квартир и домов: большой выбор вариантов для
                        поездок по России
                      </p>
                    </div>
                  </div>

                  <div className="content-side-footer">
                    <p className="content-side-footer-item">© ООО «Абито», 2011–2021</p>
                    <a href=".#!" className="content-side-footer-item">
                      Политика конфиденциальности
                    </a>
                    <a href="#!" className="content-side-footer-item">
                      Обработка данных
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
