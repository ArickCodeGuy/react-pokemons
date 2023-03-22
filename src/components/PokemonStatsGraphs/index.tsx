import { useRecoilValue } from 'recoil';
import { CommonPokemon } from '~/common/pokemons/types';
import { dictionaryState, getDictionaryValue } from '~/store/dictionary';
import { UIGraphContainer } from '../UI/Graph/container';
import { UIGraphContainerProps } from '../UI/Graph/types';

export function PokemonStatsGraphs(props: CommonPokemon) {
  const dictionary = useRecoilValue(dictionaryState);

  const maxValue = 20;
  const items: UIGraphContainerProps['items'] = Object.entries(props.stats).map(
    ([key, value]) => ({
      name: getDictionaryValue(dictionary, 'pokemonStats', key),
      value,
    })
  );

  return <UIGraphContainer items={items} maxValue={maxValue} />;
}
