import { ReactNode } from 'react';

export type PokemonCardTag = {
  text: string;
  background?: string;
};

export type PokemonCardProps = {
  id: number;
  thumb: string;
  name: string;
  description: string;
  tags?: PokemonCardTag[];
  bottom?: ReactNode;

  linkClick?: (id: number) => void;
};

export type PokemonCardState = {
  value: number;
};
