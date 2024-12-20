const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main-list');

const cardArr = [
  {
    id: 0,
    title: 'Пвх материал 2й сорт',
    price: '170 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './images/product.png',
  },
  {
    id: 1,
    title: 'Первый товар',
    price: '171 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './images/product.png',
  },
  {
    id: 2,
    title: 'Второй товар',
    price: '172 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './images/product.png',
  },
  {
    id: 3,
    title: 'Третий товар',
    price: '173 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './images/product.png',
  },
  {
    id: 4,
    title: 'Четвертый товар',
    price: '174 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './images/product.png',
  },
  {
    id: 5,
    title: 'Пятый товар',
    price: '175 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './images/product.png',
  },
  {
    id: 6,
    title: 'Шестой товар',
    price: '176 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    image: './images/product.png',
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = '';

  cardList.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      'beforeend',
      `         <a href="./product.html" class="content-main-list-item">
                  <div class="content-list-item-image">
                    <img src="${item.image}" alt="product-image" />
                  </div>
                  <h5 class="content-list-item-title">${item.title}</h5>
                  <strong class="content-list-item-price">${item.price}</strong>
                  <div class="content-list-item-desc-box">
                    <span class="content-list-item-desc">${item.address}</span>
                    <span class="content-list-item-desc">${item.date}</span>
                  </div>
                </a>`,
    );
  });
};

const filteredArray = (arr, value) => {
  console.log(arr);
  console.log(value);
  return arr.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.rowGap = 'none';
cardWrapper.style.gap = '30px';

render(cardArr);

searchBtn.addEventListener('click', () => {
  render(filteredArray(cardArr, searchInput.value));
});
