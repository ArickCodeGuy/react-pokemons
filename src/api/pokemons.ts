import pokemons, { CommonPokemon } from '~/common/pokemons';

export const fetchPokemonById = async (id: string): Promise<CommonPokemon> =>
  new Promise((res) => {
    const pokemon = pokemons.find((p) => String(p.id) === id);
    if (!pokemon) throw new Error('Pokemon not found given id');

    setTimeout(() => {
      res(pokemon);
    }, 500);
  });

export const fetchPokemons = async () => {
  new Promise((res) => {
    setTimeout(() => {
      res(pokemons);
    });
  });
};
