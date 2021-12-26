const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');

let currrentItem = null;

const dragstart = ({ target }) => {
  target.classList.add('hold');
  setTimeout(() => target.classList.add('hide'), 0);
  currrentItem = target;
};
const dragend = ({ target }) => {
  target.classList.remove('hold', 'hide');
  currrentItem = null;
};

items.forEach((item) => {
  item.addEventListener('dragstart', dragstart);
  item.addEventListener('dragend', dragend);
});

const dragover = (e) => {
  e.preventDefault();
};

const dragenter = ({ target }) => {
  const placeholder = findRow(target);
  if (placeholder) {
    placeholder.classList.add('hovered');
  }
};

const dragleave = ({ target }) => {
  const placeholder = findRow(target);
  if (placeholder) {
    placeholder.classList.remove('hovered');
  }
};

const findRow = (target) => {
  if (!target) return null;
  return [...target.classList].includes('placeholder')
    ? target
    : findRow(target.parentNode);
};

const dragdrop = ({ target }) => {
  const placeholder = findRow(target);
  if (placeholder) {
    placeholder.classList.remove('hovered');
    placeholder.prepend(currrentItem);
  }
};

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
});
