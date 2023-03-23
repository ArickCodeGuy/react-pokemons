import concatStrings from '~/utils/concatStrings';
import './style.scss';
import { UITagProps } from './types';

export function UITag(props: UITagProps) {
  return (
    <button
      type="button"
      className={concatStrings('UITag', props.size && 'UITag--small')}
      style={{ background: props.background, color: props.color }}
    >
      {props.children}
    </button>
  );
}
