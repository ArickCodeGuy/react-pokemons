import { DictionaryKey } from '~/types/types';

export type PokemonTypeInfo = {
  background?: string;
  color?: string;
};

export type PokemonTypes =
  | 'Grass'
  | 'Poison'
  | 'Water'
  | 'Ground'
  | 'Flying'
  | 'Electric'
  | 'Fire'
  | 'Psychic'
  | 'Ice'
  | 'Rock';

export const pokemonTypeInfo: Record<PokemonTypes, PokemonTypeInfo> = {
  Grass: {
    background: 'linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%)',
  },
  Poison: {
    background: 'linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%)',
  },
  Water: {
    background: 'linear-gradient(180deg, #4592c4 50%, #4592c4 50%)',
  },
  Ground: {
    background: 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)',
  },
  Flying: {
    background: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
  },
  Electric: {
    background: 'linear-gradient(180deg, #eed535 50%, #eed535 50%)',
  },
  Fire: {
    background: '#fd7d24',
  },
  Psychic: {
    background: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
  },
  Ice: {
    background: '#51c4e7',
  },
  Rock: {
    background: 'linear-gradient(180deg, #a38c21 50%, #a38c21 50%)',
  },
};

export const pokemonTypesDictionary: DictionaryKey = {};
export const pokemonTypeColorsDictionary: DictionaryKey = {};

for (const pokemonType in pokemonTypeInfo) {
  // @ts-ignore
  pokemonTypesDictionary[pokemonType] = pokemonType;
  pokemonTypeColorsDictionary[pokemonType] =
    pokemonTypeInfo[pokemonType].background;
}
