import { UINotification } from '.';
import { UINotificationContainerProps } from './types';
import './containerStyle.scss';
import { UITransition } from '../Transition';

export function UINotificationContainer(props: UINotificationContainerProps) {
  return (
    <div className="UINotificationContainer">
      {props.items.map((notifProps, key) => (
        <UITransition key={key}>
          <UINotification {...notifProps} />
        </UITransition>
      ))}
    </div>
  );
}
