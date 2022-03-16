// import functions and grab DOM elements
import { colors } from './colors-data.js';
import { renderColorEl } from './render-colors.js';
import { whales } from './whales-data.js';
import { renderWhaleEl } from './render-whales.js';
import { amps } from './amps-data.js';
import { renderAmpEl } from './render-amps.js';
import { albums } from './albums-data.js';
import { renderAlbumEl } from './render-albums.js';

const colorListEl = document.querySelector('.color');
const whalesListEl = document.querySelector('.whales-list');
const ampsListEl = document.querySelector('.amps-list');
const albumsListEl = document.querySelector('.albums-list');

for (let color of colors) {
  const colorEl = renderColorEl(color);

  colorListEl.append(colorEl);
}

for (let whale of whales) {
  const whalesEl = renderWhaleEl(whale);

  whalesListEl.append(whalesEl);
}

for (let amp of amps) {
  const ampsEl = renderAmpEl(amp);

  ampsListEl.append(ampsEl);
}

for (let album of albums) {
  const albumsEl = renderAlbumEl(album);

  albumsListEl.append(albumsEl);
}

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
