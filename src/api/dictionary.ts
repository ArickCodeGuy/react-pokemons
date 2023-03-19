import {
  pokemonTypeColorsDictionary,
  pokemonTypesDictionary,
} from '~/common/PokemonTypes';
import { Dictionary } from '~/types/types';

export const fetchDictionary = (): Promise<Dictionary> =>
  new Promise((res) => {
    const result: Dictionary = {
      pokemonTypes: pokemonTypesDictionary,
      pokemonTypeColors: pokemonTypeColorsDictionary,
    };
    setTimeout(() => {
      res(result);
    }, 500);
  });
