import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { pokemonController } from '~/api/pokemons';
import { CommonPokemon } from '~/common/pokemons/types';
import { PokemonStatsGraphs } from '~/components/PokemonStatsGraphs';
import { UITagContainer } from '~/components/UI/Tag/Container';
import { dictionaryState, getDictionaryValue } from '~/store/dictionary';
import { PokedexItemSceleton } from './Sceleton';
import './style.scss';

export function PokedexItem() {
  const params = useParams();
  const pokemonId = params.id;
  if (!pokemonId) throw new Error('pokemonId could not be undefined');

  const dictionary = useRecoilValue(dictionaryState);

  const [pokemon, setPokemon] = useState<CommonPokemon>();
  useEffect(() => {
    pokemonController
      .searchOne(`id=${pokemonId},EQUALS`)
      .then((p) => setPokemon(p));
  }, []);
  return (
    <>
      {(pokemon && (
        <>
          <section className="section Main">
            <div className="container">
              <div className="heading">
                <h1 className="h1">{pokemon.name}</h1>
                <div className="subtitle">
                  №{String(pokemon.id).padStart(4, '0')}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="thumb">
                    <img src={pokemon.thumb} alt={pokemon.name} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="h3">Description</h3>
                  <div className="description">{pokemon.description}</div>
                  <h3 className="h3">Type</h3>
                  <div className="type">
                    <UITagContainer
                      tags={pokemon.type.map((type) => ({
                        background: getDictionaryValue(
                          dictionary,
                          'pokemonTypeBackground',
                          type
                        ),
                        color: getDictionaryValue(
                          dictionary,
                          'pokemonTypeColor',
                          type
                        ),
                        children: type,
                      }))}
                    />
                  </div>
                  <h3 className="h3">Weaknesses</h3>
                  <div className="weaknesses">
                    <UITagContainer
                      tags={pokemon.weakness.map((type) => ({
                        background: getDictionaryValue(
                          dictionary,
                          'pokemonTypeBackground',
                          type
                        ),
                        color: getDictionaryValue(
                          dictionary,
                          'pokemonTypeColor',
                          type
                        ),
                        children: type,
                      }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section Stats">
            <div className="container">
              <h2 className="h2">Stats</h2>
              <PokemonStatsGraphs {...pokemon} />
            </div>
          </section>
        </>
      )) || <PokedexItemSceleton />}
    </>
  );
}
