import { UINotification } from '.';
import { UINotificationContainerProps } from './types';
import './containerStyle.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { createRef, useEffect, useRef, useState } from 'react';

export function UINotificationContainer(props: UINotificationContainerProps) {
  const [items, setItems] = useState(
    props.items.map((item) => ({
      ...item,
      ref: createRef<HTMLElement>(),
    }))
  );

  useEffect(() => {
    setItems(
      props.items.map((item) => ({
        ...item,
        ref: createRef<HTMLElement>(),
      }))
    );
  }, [props.items]);

  return (
    <TransitionGroup className="UINotificationContainer">
      {items.map((notifProps, key) => (
        <CSSTransition key={key} timeout={300} classNames="fade-animation">
          <UINotification {...notifProps} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
