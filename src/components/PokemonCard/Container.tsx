import './ContainerStyle.scss';
import { ReactNode } from 'react';

export function PokemonCardsContainer({ children }: { children: ReactNode }) {
  return <div className="PokemonCardsContainer">{children}</div>;
}
