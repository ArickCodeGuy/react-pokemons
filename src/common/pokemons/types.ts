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
  type: string[];
  weakness: string[];
  stats: CommonPokemonStats;
};
