import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { pokemonController } from '~/api/pokemons';
import { CommonPokemon } from '~/common/pokemons/types';
import { compareState } from '~/store/compare';
import { UITable } from '../UI/Table';
import { UITableBody } from '../UI/Table/types';
import commonPokemonArrToMaxMinStats from './utils/commonPokemonArrToMaxMinStats';
import commonPokemonToUIBodyRow from './utils/commonPokemonToUIBodyRow';
import head from './utils/head';

export function PokemonCompareTable() {
  const [compare, setCompare] = useRecoilState(compareState);

  const [tableBody, setTableBody] = useState<UITableBody>();

  const [pokemonsToCompare, setPokemonsToCompare] = useState<CommonPokemon[]>(
    []
  );

  useEffect(() => {
    if (!pokemonsToCompare.length) return;

    const minMaxStats = commonPokemonArrToMaxMinStats(pokemonsToCompare);

    setTableBody({
      rows: pokemonsToCompare.map((p) =>
        commonPokemonToUIBodyRow(p, minMaxStats)
      ),
    });
    console.log();
  }, [pokemonsToCompare]);

  useEffect(() => {
    const pokemonIds = Object.keys(compare).map((i) => i);

    Promise.all(pokemonIds.map(pokemonController.searchOne)).then(
      setPokemonsToCompare
    );
  }, [compare]);

  return <UITable head={head} body={tableBody} />;
}
