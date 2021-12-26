const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

// const colors = ['red', 'green', 'blue'. 'violet'];
// const getRandomColorFromArray = () => {
//   const index = Math.floor(Math.random() * colors.length);
//   return colors[index];
// }

const setColor = (el, color = getRandomColor(), withShadow = true) => {
  el.style.backgroundColor = color;
  const boxShadow = !withShadow
    ? ''
    : `0 0 2px ${color}, 0 0 10px ${color}`;
  el.style.boxShadow = boxShadow;
};

const SIDE_WIDTH = 22;
const SQUARES_COUNT = SIDE_WIDTH ** 2;
const DEFAULT_COLOR = '#1d1d1d';

const board = document.querySelector('#board');

for (let i = 0; i < SQUARES_COUNT; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => setColor(square, DEFAULT_COLOR, false));

  board.append(square);
}