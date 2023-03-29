import { getCommonPokemons } from '~/common/pokemons';

/**
 * @param query - `${key}=${value},${filterType}`
 */
export const fetchOnePokemon = async (query?: string) => {
  const [pokemon] = await getCommonPokemons(query);
  if (!pokemon) throw new Error(`Pokemon not found`);

  return pokemon;
};

export const pokemonController = {
  search: getCommonPokemons,
  searchOne: fetchOnePokemon,
};
