export function renderAmpEl(amps) {
  // <!-- <div class="amps">
  // <h3>Name: Fender Twin Reverb</h3>
  // <p>year: 1963</p>
  // <p>Manufacturer: Fender</p>
  // <ul class = "stats">
  /* <li>85 watts</li> */
  // {* <li>tube</li> */ 
  /* <li>combo</li> */
  /* </div> --> */

  const ampsEl = document.createElement('div');
  const ampsNameEl = document.createElement('h3');
  const yearEl = document.createElement('p');
  const manufacturerEl = document.createElement('p');
  const statsListEl = document.createElement('ul');

  ampsEl.classList.add('amps');

  ampsNameEl.textContent = (amps.name);
  yearEl.textContent = `Year: ${amps.year}`;
  manufacturerEl.textContent = `Manufacturer: ${amps.manufacturer}`;

  for (let stat of amps.stats) {
    const statsEl = document.createElement('li');
    statsEl.textContent = stat;

    statsListEl.append(statsEl);
  }

  ampsEl.append(ampsNameEl, yearEl, manufacturerEl, statsListEl);

  return ampsEl;
}