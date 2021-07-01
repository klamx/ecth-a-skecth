import './style.css';

const container = (grid) => {
  const cont = document.querySelector('.container');
  cont.style.cssText = `display: grid; grid-template-columns: repeat(${grid}, calc(90vh / ${grid})); grid-template-rows: repeat(${grid}, calc(90vh / ${grid}));`;
};

export const divs = (grid) => {
  const container = document.querySelector('.container');
  for (let i = 0; i < grid * grid; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
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
        div.classList.add('hover');
      }
    });
  });
};

run(30);

const button = document.querySelector('#clear');
button.addEventListener('click', () => {
  const items = document.querySelectorAll('.grid-item');
  items.forEach((item) => item.remove());
  let grid = 0;
  try {
    let newGrid = prompt('Type the width of the new grid: ', 30);
    grid = newGrid > 0 && newGrid <= 100 ? newGrid : 16;
  } catch (error) {
    alert('The width of the grid have to be <= 100');
  }
  run(grid);
});
