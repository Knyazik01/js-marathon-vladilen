const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slideCount = mainSlide.children.length;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

let activeSlideIndex = 0;

const changeSlide = (direction) => {
  if (direction === 'up') {
    activeSlideIndex = (activeSlideIndex + 1) % slideCount;
  } else if (direction === 'down') {
    activeSlideIndex = activeSlideIndex > 0 ? activeSlideIndex - 1 : slideCount - 1;
  }

  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

upBtn.addEventListener('click', () => changeSlide('up'));

downBtn.addEventListener('click', () => changeSlide('down'));
