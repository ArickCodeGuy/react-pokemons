import { UIButtonProps } from './types';

import './style.scss';
import concatStrings from '~/utils/concatStrings';
import { UILink } from '../Link/UILink';

const Component = (props: UIButtonProps) => {
  return (props.to && <UILink {...props} />) || <button {...props} />;
};

export function UIButton(props: UIButtonProps) {
  const bind = {
    ...props,
    type: props.type || 'button',
    className: concatStrings('UIButton', props.className),
  };

  return <Component {...bind} />;
}
