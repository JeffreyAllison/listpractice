export function renderColorEl(colorData) {
  const colorEl = document.createElement('p');

  colorEl.classList.add('colors');
  colorEl.textContent = colorData;

  return colorEl;
}