import { UINotificationProps } from './types';
import './style.scss';
import concatStrings from '~/utils/concatStrings';

export function UINotification(props: UINotificationProps) {
  return (
    <div
      ref={props.ref}
      className={concatStrings(
        'UINotification',
        `UINotification--${props.type || 'NEUTRAL'}`
      )}
    >
      {props.text || props.children || 'Text or children need is required'}
    </div>
  );
}
