export function renderWhaleEl(whales) {
  /*<div class="whales">
                <img src="./assets/bluewhale.png" />
                <h3>Name: Blue Whale</h3>
                <p>Length: 80 feet</p>
                <p>Weight: 300,000 lbs</p>
                <p>Diet: krill</p>
            </div>
}*/

  const whalesEl = document.createElement('div');
  const imgEl = document.createElement('img');
  const nameEl = document.creatElement('h3');
  const lengthEl = document.createElement('p');
  const weightEl = document.createElement('p');
  const dietEl = document.createElement('p');

  whaleEl.classList.add('whales')