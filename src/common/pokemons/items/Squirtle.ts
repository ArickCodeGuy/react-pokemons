import { CommonPokemon } from '../types';

export default {
  id: 7,
  thumb: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  name: 'Squirtle',
  description:
    'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
  type: ['Water'],
  weakness: ['Grass', 'Electric'],
  stats: {
    hp: 3,
    attack: 3,
    defense: 4,
    special_attack: 3,
    special_defense: 4,
    speed: 3,
  },
} as CommonPokemon;
