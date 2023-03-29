import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { CommonPokemon } from '~/common/pokemons/types';
import { Filters } from '~/components/Filters';
import { FilterItem } from '~/components/Filters/types';
import {
  dictionaryKeyToFilterOptions,
  dictionaryState,
} from '~/store/dictionary';
import './style.scss';
import { pokemonController } from '~/api/pokemons';
import { PokemonCardContainer } from '~/components/PokemonCard/Container';
import { filterItemArrToQueryString } from '~/utils/filterItemArrToQueryString';

export function Pokedex() {
  const dictionary = useRecoilValue(dictionaryState);

  const [filterItems, setFilters] = useState<FilterItem[]>([
    {
      name: 'Name',
      filterKey: 'name',
      type: 'input',
      value: '',
    },
    {
      name: 'Type',
      filterKey: 'type',
      type: 'select',
      value: '',
      options: [],
    },
  ]);

  useEffect(() => {
    const newFilterItems = [...filterItems];
    newFilterItems[1] = {
      ...newFilterItems[1],
      options: dictionaryKeyToFilterOptions(dictionary, 'pokemonType'),
    };
    setFilters(newFilterItems);
  }, [dictionary]);

  const handleFiltersUpdate = (newFilterItems: FilterItem[]) => {
    pokemonController
      .search(filterItemArrToQueryString(newFilterItems))
      .then((p) => setPokemonArr(p));
    setFilters(newFilterItems);
  };

  const [pokemonArr, setPokemonArr] = useState<CommonPokemon[]>([]);
  useEffect(() => {
    pokemonController.search().then((p) => setPokemonArr(p));
  }, []);

  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="h1">Pokedex</h1>
          <div className="row">
            <div className="col-lg-3">
              <Filters
                title={'Filters'}
                items={filterItems}
                updateFilters={handleFiltersUpdate}
              />
            </div>
            <div className="col-lg-9">
              <PokemonCardContainer pokemons={pokemonArr} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
