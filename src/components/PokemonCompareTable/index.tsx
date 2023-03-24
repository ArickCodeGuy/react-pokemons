import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { pokemonController } from '~/api/pokemons';
import { CommonPokemon } from '~/common/pokemons/types';
import { compareState } from '~/store/compare';
import { dictionaryState } from '~/store/dictionary';
import { UITable } from '../UI/Table';
import { UITableSceleton } from '../UI/Table/Sceleton';
import { UITableBody } from '../UI/Table/types';
import commonPokemonArrToMaxMinStats from './utils/commonPokemonArrToMaxMinStats';
import commonPokemonToUIBodyRow from './utils/commonPokemonToUIBodyRow';
import head from './utils/head';

export function PokemonCompareTable() {
  const dictionary = useRecoilValue(dictionaryState);

  const compare = useRecoilValue(compareState);

  const [tableBody, setTableBody] = useState<UITableBody>();

  const [pokemonsToCompare, setPokemonsToCompare] = useState<CommonPokemon[]>(
    []
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!pokemonsToCompare.length) return;

    const minMaxStats = commonPokemonArrToMaxMinStats(pokemonsToCompare);

    setTableBody({
      rows: pokemonsToCompare.map((commonPokemon) =>
        commonPokemonToUIBodyRow(commonPokemon, minMaxStats, dictionary)
      ),
    });
  }, [pokemonsToCompare]);

  useEffect(() => {
    const pokemonIds = Object.keys(compare).map((i) => i);

    Promise.all(pokemonIds.map(pokemonController.searchOne)).then(
      (commonPokemons) => {
        setPokemonsToCompare(commonPokemons);
        setIsLoading(false);
      }
    );
  }, [compare]);

  return (
    <>
      {(!isLoading && (
        <UITable head={head} body={tableBody}>
          {!tableBody?.rows.length && (
            <tr>
              <td colSpan={3}>No pokemons to compare</td>
            </tr>
          )}
        </UITable>
      )) || <UITableSceleton />}
    </>
  );
}
