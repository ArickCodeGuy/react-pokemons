// @ts-nocheck
import { CommonPokemon } from './pokemons';

/**
 * @returns {CommonPokemon}
 */
function scrapePokemon() {
  const [name, idString] = document
    .querySelector('.pokedex-pokemon-pagination-title')
    .innerText.split(' ');
  const id = Number(idString.replace('#', ''));

  const thumb = document.querySelector('.profile-images img').src;

  const description = document.querySelector('.version-descriptions').innerText;

  const type = [...document.querySelectorAll('.dtm-type ul li')].map(
    (e) => e.innerText
  );

  const weakness = [...document.querySelectorAll('.dtm-weaknesses ul li')].map(
    (e) => e.innerText
  );

  const stats = [
    ...document.querySelectorAll('.pokemon-stats-info > ul > li'),
  ].reduce((result, liEl) => {
    const key = liEl
      .querySelector('span')
      .innerText.replace(' ', '_')
      .toLowerCase();
    const value = Number(liEl.querySelector('li').dataset.value);

    result[key] = value;
    return result;
  }, {});

  return {
    id,
    thumb,
    name,
    description,
    type,
    weakness,
    stats,
  };
}
scrapePokemon();
