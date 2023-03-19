import { CommonPokemon } from '.';

export default {
  id: 2,
  name: 'Bulbasaur',
  thumb: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  description:
    'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
  type: ['Grass', 'Poison'],
  weakness: ['Fire', 'Psychic', 'Flying', 'Ice'],
  stats: {
    hp: 3,
    attack: 3,
    defence: 3,
    specialAttack: 4,
    specialDefence: 4,
    speed: 3,
  },
} as CommonPokemon;
