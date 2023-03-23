import { useRecoilState } from 'recoil';
import { UINotificationContainer } from '~/components/UI/Notification/container';
import { notificationActions, notificationsState } from '~/store/notifications';

export function FrontNotifications() {
  const [notifications, setNotifications] = useRecoilState(notificationsState);
  const items = notifications.map((n) => ({
    ...n.notificationProps,
    onCloseClick: () => {
      setNotifications(notificationActions.remove(notifications, n.id));
    },
  }));

  return <UINotificationContainer items={items} />;
}
