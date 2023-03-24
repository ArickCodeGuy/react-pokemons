import { CommonPokemon } from '~/common/pokemons/types';
import { PokemonCard } from '.';
import { UICardContainer } from '../UI/Card/Container';
import { UICardSceleton } from '../UI/Card/Sceleton';

export function PokemonCardContainer({
  pokemons,
}: {
  pokemons: CommonPokemon[];
}) {
  return (
    <UICardContainer>
      {(pokemons.length &&
        pokemons.map((card) => <PokemonCard card={card} key={card.id} />)) ||
        new Array(6).fill(null).map((_, k) => <UICardSceleton key={k} />)}
    </UICardContainer>
  );
}
