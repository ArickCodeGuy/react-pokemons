import { PokemonTypes } from '../PokemonTypes';
import Bulbasaur from './Bulbasaur';
import Charmeleon from './Charmeleon';
import Picachu from './Picachu';

export type CommonPokemonStatsKeys = keyof CommonPokemonStats;

export type CommonPokemonStats = {
  hp: number;
  attack: number;
  defence: number;
  specialAttack: number;
  specialDefence: number;
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

const commonPokemons: CommonPokemon[] = [Picachu, Bulbasaur, Charmeleon];

export default commonPokemons;
