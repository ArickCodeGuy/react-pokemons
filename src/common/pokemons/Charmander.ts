import { CommonPokemon } from '.';

export default {
  id: 4,
  thumb: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  name: 'Charmander',
  description:
    'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
  type: ['Fire'],
  weakness: ['Water', 'Ground', 'Rock'],
  stats: {
    hp: 3,
    attack: 4,
    defense: 3,
    special_attack: 4,
    special_defense: 3,
    speed: 4,
  },
} as CommonPokemon;
