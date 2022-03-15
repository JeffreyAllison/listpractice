// import functions and grab DOM elements
import { colors } from './colors-data.js';
import { renderColorEl } from './render-colors.js';

const colorListEl = document.querySelector('.color');

for (let color of colors) {
  const colorEl = renderColorEl(color);

  colorListEl.append(colorEl);
}



// initialize global state

// set event listeners 
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
