import './style.scss';
import { UITagProps } from './types';

export function UITag(props: UITagProps) {
  const classBind = `UITag ${props.size ? 'UITag--small' : ''}`;

  return (
    <button
      type="button"
      className={classBind}
      style={{ background: props.background }}
    >
      {props.children}
    </button>
  );
}
