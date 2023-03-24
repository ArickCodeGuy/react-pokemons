import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CommonPokemon } from '~/common/pokemons/types';
import { compareActions, compareState } from '~/store/compare';
import { dictionaryState, getDictionaryValue } from '~/store/dictionary';
import { useNotification } from '~/utils/useNotification';
import { UIButton } from '../UI/Button';
import { UICardContainer } from '../UI/Card/Container';
import { UICardSceleton } from '../UI/Card/Sceleton';
import { UICardProps } from '../UI/Card/types';

function Bottom({
  compareClick,
  isComparing,
  navigate,
}: {
  isComparing?: boolean;
  compareClick?: () => void;
  navigate: () => void;
}) {
  return (
    <>
      <UIButton onClick={compareClick}>
        {isComparing ? 'Remove from compare' : 'Add to compare'}
      </UIButton>
      <UIButton onClick={navigate} style={{ width: '100%' }}>
        Pokemon page
      </UIButton>
    </>
  );
}

export function PokemonCards({ cards }: { cards: CommonPokemon[] }) {
  const dictionary = useRecoilValue(dictionaryState);
  const [compare, setCompare] = useRecoilState(compareState);
  const { pushNotification } = useNotification();
  const navigate = useNavigate();

  const handleCompareClick = (commonPokemon: CommonPokemon) => {
    if (compare[commonPokemon.id]) {
      setCompare(compareActions.removeItem(compare, commonPokemon.id));
      pushNotification({
        text: `Removed ${commonPokemon.name} to comparation`,
        type: 'SUCCESS',
      });
    } else {
      setCompare(compareActions.addItem(compare, commonPokemon.id));
      pushNotification({
        text: `Added ${commonPokemon.name} to comparation`,
        type: 'SUCCESS',
      });
    }
  };

  const items: UICardProps[] = cards.map((commonPokemon) => ({
    id: commonPokemon.id,
    thumb: commonPokemon.thumb,
    name: commonPokemon.name,
    description: commonPokemon.description,
    tags: commonPokemon.type.map((type) => ({
      children: type,
      color: getDictionaryValue(dictionary, 'pokemonTypeColor', type),
      background: getDictionaryValue(dictionary, 'pokemonTypeBackground', type),
      size: 'small',
    })),
    bottom: (
      <Bottom
        compareClick={handleCompareClick.bind(undefined, commonPokemon)}
        isComparing={compare[commonPokemon.id]}
        navigate={() => navigate(`/pokedex/${commonPokemon.id}`)}
      />
    ),
  }));

  return (
    <UICardContainer items={items}>
      {items.length === 0 &&
        new Array(6).fill(null).map(() => <UICardSceleton />)}
    </UICardContainer>
  );
}
