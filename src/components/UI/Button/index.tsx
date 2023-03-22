import { UIButtonProps } from './types';

import './style.scss';
import { Link } from 'react-router-dom';

export function UIButton(props: UIButtonProps) {
  const buttonClasses = 'UIButton ' + (props.className || '');

  return (
    <button
      className={buttonClasses}
      type={props.type || 'button'}
      disabled={props.disabled}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
