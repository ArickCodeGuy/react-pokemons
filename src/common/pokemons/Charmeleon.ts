import { CommonPokemon } from '.';

export default {
  id: 3,
  name: 'Charmeleon',
  thumb: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  description:
    'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
  type: ['Fire'],
  weakness: ['Water', 'Ground', 'Rock'],
  stats: {
    hp: 4,
    attack: 4,
    defence: 4,
    specialAttack: 5,
    specialDefence: 4,
    speed: 5,
  },
} as CommonPokemon;
