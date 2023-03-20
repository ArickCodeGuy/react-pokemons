import { CommonPokemon } from '.';

export default {
  id: 2,
  thumb: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
  name: 'Ivysaur',
  description:
    'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
  type: ['Grass', 'Poison'],
  weakness: ['Fire', 'Psychic', 'Flying', 'Ice'],
  stats: {
    hp: 4,
    attack: 4,
    defense: 4,
    special_attack: 5,
    special_defense: 5,
    speed: 4,
  },
} as CommonPokemon;
