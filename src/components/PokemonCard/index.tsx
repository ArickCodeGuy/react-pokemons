import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CommonPokemon } from '~/common/pokemons/types';
import { compareActions, compareState } from '~/store/compare';
import { dictionaryState, getDictionaryValue } from '~/store/dictionary';
import { useNotification } from '~/utils/useNotification';
import { UIButton } from '../UI/Button';
import { UICard } from '../UI/Card';
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

export function PokemonCard({ card }: { card: CommonPokemon }) {
  const dictionary = useRecoilValue(dictionaryState);
  const [compare, setCompare] = useRecoilState(compareState);
  const { pushNotification } = useNotification();
  const navigate = useNavigate();

  const handleCompareClick = (commonPokemon: CommonPokemon) => {
    if (compare[commonPokemon.id]) {
      setCompare(compareActions.removeItem(compare, commonPokemon.id));
      pushNotification({
        text: `Removed ${commonPokemon.name} from comparation`,
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
    bottom: (
      <Bottom
        compareClick={handleCompareClick.bind(undefined, card)}
        isComparing={compare[card.id]}
        navigate={() => navigate(`/pokedex/${card.id}`)}
      />
    ),
  };

  return <UICard {...cardProps} />;
}
