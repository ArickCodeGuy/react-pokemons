import { CommonPokemon } from '.';

export default {
  id: 5,
  thumb: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  name: 'Charmeleon',
  description:
    'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
  type: ['Fire'],
  weakness: ['Water', 'Ground', 'Rock'],
  stats: {
    hp: 4,
    attack: 4,
    defense: 4,
    special_attack: 5,
    special_defense: 4,
    speed: 5,
  },
} as CommonPokemon;
