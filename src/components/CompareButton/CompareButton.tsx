import { compareActions, compareState } from '~/store/compare';
import { CompareButtonProps } from './types';
import { useNotification } from '~/utils/useNotification';
import { useRecoilState } from 'recoil';
import { UIButton } from '../UI/Button';

export function CompareButton(props: CompareButtonProps) {
  const [compare, setCompare] = useRecoilState(compareState);
  const { pushNotification } = useNotification();

  const handleCompareClick = () => {
    if (compare[props.pokemonId]) {
      setCompare(compareActions.removeItem(compare, props.pokemonId));
      pushNotification({
        text: `Removed pokemon from comparation`,
        type: 'SUCCESS',
      });
    } else {
      setCompare(compareActions.addItem(compare, props.pokemonId));
      pushNotification({
        text: `Added pokemon to comparation`,
        type: 'SUCCESS',
      });
    }
  };

  const isComparing = compare[props.pokemonId];

  return (
    <UIButton onClick={handleCompareClick}>
      {isComparing ? 'Remove from compare' : 'Add to compare'}
    </UIButton>
  );
}
