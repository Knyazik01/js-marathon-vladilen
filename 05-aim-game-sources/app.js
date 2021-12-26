const startButton = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;
let interval;

const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const normaliseSeconds = (sec) => `${sec}`.padStart(2, '0');

const setTime = (value) => {
  timeEl.innerHTML = `00:${normaliseSeconds(value)}`;
};

const finishGame = () => {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `
    <h1>Счет: <span class="primary">${score}</span></h1>
  `;
  clearInterval(interval);
};

const createRandomCircle = () => {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  const size = getRandomNumber(10, 60);
  const { height, width } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  let background = getRandomColor();
  while (['#485563', '#29323C'].includes(background)) {
    background = getRandomColor();
  }
  circle.style.background = getRandomColor();

  board.append(circle);
};

const decreaseTime = () => {
  time === 0
    ? finishGame()
    : setTime(--time);
};

const startGame = () => {
  interval = setInterval(decreaseTime, 1000);
  setTime(time);
  createRandomCircle();
};

startButton.addEventListener('click', (e) => {
  e.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', ({ target }) => {
  if (target.classList.contains('time-btn')) {
    time = parseInt(target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', ({ target }) => {
  if (target.classList.contains('circle')) {
    score++;
    target.remove();
    createRandomCircle();
  }
});