export function renderAmpEl(amps) {
  //  <!-- <div class="amps">
  // <h3>Name: Fender Twin Reverb</h3>
  // <p>year: 1963</p>
  // <p>Manufacturer: Fender</p>
  // <p>stats</p>
  // </div> -->

  const ampsEl = document.createElement('div');
  const ampsNameEl = document.createElement('h3');
  const yearEl = document.createElement('p');
  const manufacturerEl = document.createElement('p');
  const statsListEl = document.createElement('ul');

  ampsEl.classList.add('amps');

  ampsNameEl.textContent = (amps.name);
  yearEl.textContent = `Year: ${amps.year}`;
  manufacturerEl.textContent = `Manufacturer: ${amps.manufacturer}`;
  statsListEl.textContent = `Wattage: ${amps.stats.wattage}. Type: ${amps.stats.type}. Format: ${amps.stats.format}`;

  ampsEl.append(ampsNameEl, yearEl, manufacturerEl, statsListEl);

  return ampsEl;
}