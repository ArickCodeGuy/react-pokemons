import { UINotification } from '.';
import { UINotificationContainerProps } from './types';
import './containerStyle.scss';

export function UINotificationContainer(props: UINotificationContainerProps) {
  return (
    <div className="UINotificationContainer">
      {props.items.map((notifProps, key) => (
        <UINotification {...notifProps} key={key} />
      ))}
    </div>
  );
}
