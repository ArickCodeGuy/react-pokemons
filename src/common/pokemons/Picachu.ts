import { CommonPokemon } from '.';

export default {
  id: 1,
  name: 'Picachu',
  thumb: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  description:
    'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
  type: ['Electric'],
  weakness: ['Ground'],
  stats: {
    hp: 3,
    attack: 4,
    defence: 3,
    specialAttack: 3,
    specialDefence: 3,
    speed: 6,
  },
} as CommonPokemon;
