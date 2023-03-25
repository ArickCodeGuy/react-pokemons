import { memo, useEffect, useState } from 'react';
import concatStrings from '~/utils/concatStrings';
import { UITransitionProps } from './types';
import './style.scss';

export const UITransition = memo(function (props: UITransitionProps) {
  const transitionDuration = props.transitionDuration || 300;
  const [className, setClassName] = useState(
    concatStrings('UITransition', 'UITransition-in-from')
  );

  const transitionIn = () => {
    setClassName(concatStrings('UITransition', 'UITransition-in-from'));
    setTimeout(() =>
      setClassName(concatStrings('UITransition', 'UITransition-in-to'))
    );
    setTimeout(() => setClassName('UITransition'), transitionDuration);
  };

  const transitionOut = () => {
    setClassName(concatStrings('UITransition', 'UITransition-out-from'));
    setTimeout(() =>
      setClassName(concatStrings('UITransition', 'UITransition-out-to'))
    );
    setTimeout(() => {
      setClassName('UITransition');
      props.onTransitionOutEnd && props.onTransitionOutEnd();
    }, transitionDuration);
  };

  useEffect(() => {
    transitionIn();
  }, []);

  useEffect(() => {
    if (!props.transitionOut) return;
    transitionOut();
  }, [props.transitionOut]);

  return (
    <div
      className={className}
      style={{ transition: `${transitionDuration}ms` }}
    >
      {props.children}
    </div>
  );
});
