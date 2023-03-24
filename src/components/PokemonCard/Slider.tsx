import { CommonPokemon } from '~/common/pokemons/types';
import { PokemonCard } from '.';
import { UICardSlider } from '../UI/Card/Slider';

export function PokemonCardSlider({ pokemons }: { pokemons: CommonPokemon[] }) {
  const slides = pokemons.map((pokemon) => <PokemonCard card={pokemon} />);

  return <UICardSlider slides={slides} />;
}
