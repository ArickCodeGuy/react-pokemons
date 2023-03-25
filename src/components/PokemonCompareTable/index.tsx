import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pokemonController } from '~/api/pokemons';
import { CommonPokemon } from '~/common/pokemons/types';
import { compareActions, compareState } from '~/store/compare';
import { dictionaryState } from '~/store/dictionary';
import { UITable } from '../UI/Table';
import { UITableSceleton } from '../UI/Table/Sceleton';
import { UITableBody } from '../UI/Table/types';
import commonPokemonArrToMaxMinStats from './utils/commonPokemonArrToMaxMinStats';
import commonPokemonToUIBodyRow from './utils/commonPokemonToUIBodyRow';
import head from './utils/head';

export function PokemonCompareTable() {
  const dictionary = useRecoilValue(dictionaryState);

  const [compare, setCompare] = useRecoilState(compareState);

  const [tableBody, setTableBody] = useState<UITableBody>();

  const [pokemonsToCompare, setPokemonsToCompare] = useState<CommonPokemon[]>(
    []
  );

  const [isLoading, setIsLoading] = useState(true);

  const handleRemoveClick = (pokemonId: number) => {
    setCompare(compareActions.removeItem(compare, pokemonId));
  };

  useEffect(() => {
    const minMaxStats = commonPokemonArrToMaxMinStats(pokemonsToCompare);

    setTableBody({
      rows: pokemonsToCompare.map((commonPokemon) =>
        commonPokemonToUIBodyRow(
          commonPokemon,
          minMaxStats,
          dictionary,
          handleRemoveClick
        )
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
              <td colSpan={4}>No pokemons to compare</td>
            </tr>
          )}
        </UITable>
      )) || <UITableSceleton />}
    </>
  );
}
