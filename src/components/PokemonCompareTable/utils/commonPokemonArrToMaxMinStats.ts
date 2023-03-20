import { CommonPokemon, CommonPokemonStatsKeys } from '~/common/pokemons';

/**
 * @description key[0] - min, key[1] - max
 */
export type MaxMinPokemonStats = Record<
  CommonPokemonStatsKeys,
  [number, number]
>;

export default (commonPokemonArr: CommonPokemon[]): MaxMinPokemonStats => {
  const useInitValue = (): [number, number] => [Infinity, -Infinity];

  const result: MaxMinPokemonStats = {
    hp: useInitValue(),
    attack: useInitValue(),
    defense: useInitValue(),
    special_attack: useInitValue(),
    special_defense: useInitValue(),
    speed: useInitValue(),
  };

  commonPokemonArr.forEach((commonPokemon) => {
    Object.keys(result).forEach((statKey) => {
      // @ts-ignore
      const stat: [number, number] = result[statKey];
      // @ts-ignore
      const commonPokemonStatValue: number = commonPokemon.stats[statKey];

      stat[0] > commonPokemonStatValue
        ? (stat[0] = commonPokemonStatValue)
        : false;
      stat[1] < commonPokemonStatValue
        ? (stat[1] = commonPokemonStatValue)
        : false;
    });
  });

  return result;
};
