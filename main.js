import './style.css';

let color = '#16161a';
let grid = 30;

const container = (grid) => {
  const cont = document.querySelector('.container');
  cont.style.cssText = `display: grid; grid-template-columns: repeat(${grid}, calc(90vh / ${grid})); grid-template-rows: repeat(${grid}, calc(90vh / ${grid}));`;
};

export const divs = (grid) => {
  const container = document.querySelector('.container');
  for (let i = 0; i < grid * grid; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.classList.add('toggle');
    div.setAttribute('id', i);
    div.style.cssText = `width: calc(90vh / ${grid}); height: calc(90vh / ${grid});`;
    container.appendChild(div);
  }
};

const run = (grid) => {
  container(grid);
  divs(grid);

  const items = document.querySelectorAll('.grid-item');
  items.forEach((div) => {
    addEventListener('mouseover', (e) => {
      if (e.target.id === div.getAttribute('id')) {
        // div.classList.add('hover');
        div.style.cssText = `background: ${color}`;
      }
    });
  });
};

run(30);

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  const items = document.querySelectorAll('.grid-item');
  items.forEach((item) => item.remove());
  run(grid);
  const colorP = document.querySelector('#color');
  colorP.value = '#16161a';
  color = colorP.value;
});

const toggle = document.querySelector('#toggle-grid');
toggle.addEventListener('click', () => {
  const divs = document.querySelectorAll('.grid-item');
  divs.forEach((div) => div.classList.toggle('toggle'));
});

const colorP = document.querySelector('#color');
colorP.addEventListener(
  'input',
  () => {
    let col = colorP.value;
    color = col;
  },
  false
);

const range = document.querySelector('#range');
range.addEventListener(
  'input',
  () => {
    let val = range.value;
    grid = val;
    const pRange = document.querySelector('.reset-p');
    pRange.textContent = `Size: ${val} x ${val}`;
  },
  false
);
