import { useRecoilState } from 'recoil';
import { UINotificationProps } from '~/components/UI/Notification/types';
import { notificationActions, notificationsState } from '~/store/notifications';

export function useNotification() {
  const [notifications, setNotifications] = useRecoilState(notificationsState);

  const pushNotification = (notif: UINotificationProps) => {
    setNotifications((n) => {
      const newState = notificationActions.push(n, notif);
      setTimeout(() => {
        removeNotif(newState[newState.length - 1].id);
      }, 5000);

      return newState;
    });
  };

  const removeNotif = (id: number) => {
    setNotifications((n) => {
      return notificationActions.remove(n, id);
    });
  };

  return { pushNotification };
}
