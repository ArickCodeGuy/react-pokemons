import pokemons from '~/common/pokemons';
import { CommonPokemon } from '~/common/pokemons/types';

export const fetchPokemonById = async (id: string): Promise<CommonPokemon> =>
  new Promise((res, rej) => {
    const pokemon = pokemons.find((p) => String(p.id) === id);
    if (!pokemon) return rej(`Pokemon with id ${id} not found`);

    setTimeout(() => {
      res(pokemon);
    }, 500);
  });

export const fetchPokemons = async (): Promise<CommonPokemon[]> =>
  new Promise((res) => {
    setTimeout(() => {
      res(pokemons);
    }, 500);
  });

export const pokemonController = {
  search: fetchPokemons,
  searchOne: fetchPokemonById,
};
