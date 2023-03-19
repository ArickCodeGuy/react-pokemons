import pokemons, { CommonPokemon } from '~/common/pokemons';

export const fetchPokemonById = async (id: string): Promise<CommonPokemon> =>
  new Promise((res) => {
    const pokemonIndex = pokemons.findIndex((p) => String(p.id) === id);
    if (pokemonIndex === -1) throw new Error('Pokemon not found given id');

    const result = pokemons[pokemonIndex];

    setTimeout(() => {
      res(result);
    }, 500);
  });
