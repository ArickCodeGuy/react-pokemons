import { CommonPokemon } from '~/common/pokemons';
import { PokemonCardProps } from '~/components/PokemonCard/types';
import { PokemonCard } from '~/components/PokemonCard';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dictionaryState, getDictionaryValue } from '~/store/dictionary';
import { compareActions, compareState } from '~/store/compare';
import { UIButton } from '~/components/UI/Button';
import { useNotification } from './useNotification';

function Bottom({
  compareClick,
  isComparing,
}: {
  compareClick?: () => void;
  isComparing?: boolean;
}) {
  return (
    <UIButton onClick={compareClick}>
      {isComparing ? 'Remove from compare' : 'Add to compare'}
    </UIButton>
  );
}

export default function (commonPokemon: CommonPokemon) {
  const navigate = useNavigate();
  const [compare, setCompare] = useRecoilState(compareState);
  const dictionary = useRecoilValue(dictionaryState);
  const { pushNotification } = useNotification();

  const handleCompareClick = (pokemonId: number) => {
    if (compare[pokemonId]) {
      setCompare(compareActions.removeItem(compare, pokemonId));
      pushNotification({
        text: `Removed ${commonPokemon.name} to comparation`,
        type: 'SUCCESS',
      });
    } else {
      setCompare(compareActions.addItem(compare, pokemonId));
      pushNotification({
        text: `Added ${commonPokemon.name} to comparation`,
        type: 'SUCCESS',
      });
    }
  };

  const props: PokemonCardProps = {
    id: commonPokemon.id,
    thumb: commonPokemon.thumb,
    name: commonPokemon.name,
    description: commonPokemon.description,
    tags: commonPokemon.type.map((type) => ({
      text: type,
      background: getDictionaryValue(dictionary, 'pokemonTypeColors', type),
    })),
    bottom: (
      <Bottom
        compareClick={handleCompareClick.bind(undefined, commonPokemon.id)}
        isComparing={compare[commonPokemon.id]}
      />
    ),
    linkClick(id) {
      navigate(`/catalog/${id}`);
    },
  };

  return <PokemonCard {...props} />;
}
