import Bulbasaur from './items/Bulbasaur';
import Charmeleon from './items/Charmeleon';
import Picachu from './items/Picachu';
import Caterpie from './items/Caterpie';
import Charmander from './items/Charmander';
import Squirtle from './items/Squirtle';
import { CommonPokemon, Filter } from './types';

const commonPokemons: CommonPokemon[] = [
  Picachu,
  Bulbasaur,
  Charmeleon,
  Caterpie,
  Charmander,
  Squirtle,
];

export default commonPokemons;

const queryStringToFilterArr = (query?: string): Filter[] => {
  if (!query) return [];

  return query.split('&').map((param) => {
    const [key, value, filterType] = param.split(/[=,]/);

    return {
      key,
      value,
      filterType,
    } as Filter;
  });
};

/**
 * @param query - `${key}=${value},${filterType}`
 */
export const getCommonPokemons = (query?: string): Promise<CommonPokemon[]> =>
  new Promise((res) => {
    const filters = queryStringToFilterArr(query);

    const filteredPokemons = commonPokemons.filter((pokemon) => {
      for (const key in filters) {
        // pokemon[filter.key] could be
        // string, number, string[]
        const filter = filters[key];

        if (filter.filterType === 'EQUALS') {
          // @ts-ignore
          if (Array.isArray(pokemon[filter.key])) {
            const regexp = RegExp(filter.value, 'i');
            // @ts-ignore
            return regexp.test(pokemon[filter.key].join(' '));
          }
          // @ts-ignore
          return String(pokemon[filter.key]) === filter.value;
        }
        if (filter.filterType === 'LIKE') {
          const regexp = RegExp(filter.value, 'i');
          // @ts-ignore
          return regexp.test(pokemon[filter.key]);
        }
      }

      return true;
    });

    setTimeout(() => {
      res(filteredPokemons);
    }, 500);
  });
