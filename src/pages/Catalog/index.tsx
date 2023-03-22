import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import pokemons from '~/common/pokemons';
import { Filters } from '~/components/Filters';
import { FilterItem } from '~/components/Filters/types';
import { PokemonCards } from '~/components/PokemonCards';
import {
  dictionaryKeyToFilterOptions,
  dictionaryState,
} from '~/store/dictionary';
import './style.scss';

export function Catalog() {
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
      options: dictionaryKeyToFilterOptions(dictionary, 'pokemonTypes'),
    };
    setFilters(newFilterItems);
  }, [dictionary]);

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Filters
                title={'Filters'}
                items={filterItems}
                updateFilters={setFilters}
              />
            </div>
            <div className="col-lg-9">
              <PokemonCards cards={pokemons} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
