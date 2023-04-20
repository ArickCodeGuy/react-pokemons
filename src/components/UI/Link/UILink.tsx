import { Link } from 'react-router-dom';
import { UILinkProps } from './types';
import { MouseEvent } from 'react';
import concatStrings from '~/utils/concatStrings';

export function UILink(props: UILinkProps) {
  const handleOnClick = (e: MouseEvent) => {
    window.scrollTo(0, 0);

    props.onClick && props.onClick(e);
  };

  const classNameBind = concatStrings('UILink', props.className);

  return (
    <Link
      to={props.to || ''}
      className={classNameBind}
      onClick={handleOnClick}
      style={props.style}
    >
      {props.children}
    </Link>
  );
}
