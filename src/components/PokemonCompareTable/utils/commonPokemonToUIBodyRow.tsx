import { Dictionary } from '~/common/dictionaries/types';
import { CommonPokemon } from '~/common/pokemons/types';
import { UITableBodyRow } from '~/components/UI/Table/types';
import { getDictionaryValue } from '~/store/dictionary';
import { MaxMinPokemonStats } from './commonPokemonArrToMaxMinStats';

export default function (
  commonPokemon: CommonPokemon,
  minMaxStats: MaxMinPokemonStats,
  dictionary: Dictionary,
  onRemoveClick: (pokemonId: number) => void
): UITableBodyRow {
  const statsArr = Object.keys(commonPokemon.stats).map((statKey) => {
    // @ts-ignore
    const statValue: number = commonPokemon.stats[statKey];
    // @ts-ignore
    const min: number = minMaxStats[statKey][0];
    // @ts-ignore
    const max: number = minMaxStats[statKey][1];

    const isMinEqualsMax = min === max;
    const isLowest = min === statValue;
    const isHighest = max === statValue;

    const statClassModificator = isMinEqualsMax
      ? 'tie'
      : isLowest
      ? 'min'
      : isHighest
      ? 'max'
      : '';

    const stat = (
      <div key={statKey}>
        {getDictionaryValue(dictionary, 'pokemonStats', statKey)}:{' '}
        <span className={statClassModificator}>{statValue}</span>
      </div>
    );

    return stat;
  });

  const result: UITableBodyRow = {
    cells: {
      thumb: {
        children: <img src={commonPokemon.thumb} />,
        cellStyle: { width: '100px' },
      },
      name: {
        text: commonPokemon.name,
      },
      stats: {
        children: <div>{statsArr}</div>,
      },
      remove: {
        children: (
          <button type="button" onClick={() => onRemoveClick(commonPokemon.id)}>
            X
          </button>
        ),
        cellStyle: { width: '10px' },
      },
    },
  };

  return result;
}
