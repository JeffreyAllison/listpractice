export function renderAlbumEl(albums) {
  // <!-- <div class="albums">
  // <h3>Name: Mm...Food</h3>
  // <p>Artist: MF DOOM</p>
  // <p>year: 2004</p>
  // <ul class='genres'>
  // <li>rap</li>
  // <li>hip-hop</li>
  // </ul>
  // </div> -->

  const albumsEl = document.createElement('div');
  const albumsTitleEl = document.createElement('h3');
  const albumsArtistEl = document.createElement('p');
  const albumsYearEl = document.createElement('p');
  const genresListEl = document.createElement('ul');

  albumsEl.classList.add('albums');

  albumsTitleEl.textContent = `Title: ${albums.title}`;
  albumsArtistEl.textContent = `Artist: ${albums.artist}`;
  albumsYearEl.textContent = `Year: ${albums.year}`;

  for (let genre of albums.genres) {
    const genreEl = document.createElement('li');
    genreEl.textContent = genre;
    genresListEl.append(genreEl);
  }

  albumsEl.append(albumsTitleEl, albumsArtistEl, albumsYearEl, genresListEl);

  return albumsEl;
}