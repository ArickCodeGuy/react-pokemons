import { PokemonTypes } from '../PokemonTypes';
import Bulbasaur from './Bulbasaur';
import Charmeleon from './Charmeleon';
import Picachu from './Picachu';
import Caterpie from './Caterpie';
import Charmander from './Charmander';
import Squirtle from './Squirtle';

export type CommonPokemonStatsKeys = keyof CommonPokemonStats;

export type CommonPokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
};

export type CommonPokemon = {
  id: number;
  thumb: string;
  name: string;
  description: string;
  type: PokemonTypes[];
  weakness: PokemonTypes[];
  stats: CommonPokemonStats;
};

const commonPokemons: CommonPokemon[] = [
  Picachu,
  Bulbasaur,
  Charmeleon,
  Caterpie,
  Charmander,
  Squirtle,
];

export default commonPokemons;
