import { UINotificationProps } from './types';
import './style.scss';

export function UINotification(props: UINotificationProps) {
  const classNames = [
    'UINotification',
    `UINotification--${props.type || 'NEUTRAL'}`,
  ].join(' ');

  return (
    <div className={classNames}>
      {props.text || props.children || 'Text or children need to be binded'}
    </div>
  );
}
