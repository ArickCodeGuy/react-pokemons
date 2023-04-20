import { useRecoilValue } from 'recoil';
import { CommonPokemon } from '~/common/pokemons/types';
import { dictionaryState, getDictionaryValue } from '~/store/dictionary';
import { UIButton } from '../UI/Button';
import { UICard } from '../UI/Card';
import { UICardProps } from '../UI/Card/types';
import { CompareButton } from '../CompareButton/CompareButton';

function Bottom(props: CommonPokemon) {
  return (
    <>
      <CompareButton pokemonId={props.id} />
      <UIButton to={`/pokedex/${props.id}`} style={{ width: '100%' }}>
        Pokemon page
      </UIButton>
    </>
  );
}

export function PokemonCard({ card }: { card: CommonPokemon }) {
  const dictionary = useRecoilValue(dictionaryState);

  const cardProps: UICardProps = {
    id: card.id,
    thumb: card.thumb,
    name: card.name,
    description: card.description,
    tags: card.type.map((type) => ({
      children: type,
      color: getDictionaryValue(dictionary, 'pokemonTypeColor', type),
      background: getDictionaryValue(dictionary, 'pokemonTypeBackground', type),
      size: 'small',
    })),
    bottom: <Bottom {...card} />,
  };

  return <UICard {...cardProps} />;
}
