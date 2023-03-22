import { CommonPokemon } from '../types';

export default {
  id: 25,
  thumb: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  name: 'Pikachu',
  description:
    'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
  type: ['Electric'],
  weakness: ['Ground'],
  stats: {
    hp: 3,
    attack: 4,
    defense: 3,
    special_attack: 3,
    special_defense: 3,
    speed: 6,
  },
} as CommonPokemon;
