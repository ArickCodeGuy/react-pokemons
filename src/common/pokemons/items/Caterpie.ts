import { CommonPokemon } from '../types';

export default {
  id: 10,
  thumb: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
  name: 'Caterpie',
  description:
    'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
  type: ['Bug'],
  weakness: ['Fire', 'Flying', 'Rock'],
  stats: {
    hp: 3,
    attack: 2,
    defense: 3,
    special_attack: 2,
    special_defense: 2,
    speed: 3,
  },
} as CommonPokemon;
