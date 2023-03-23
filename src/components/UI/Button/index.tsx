import { UIButtonProps } from './types';

import './style.scss';
import { Link } from 'react-router-dom';
import concatStrings from '~/utils/concatStrings';

export function UIButton(props: UIButtonProps) {
  return (
    <button
      className={concatStrings('UIButton', props.className)}
      type={props.type || 'button'}
      disabled={props.disabled}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
