import { atom } from 'recoil';
import { UINotificationProps } from '~/components/UI/Notification/types';
import { idGenerator } from '~/utils/idGenerator';
const getId = idGenerator();

export type NotificationState = {
  id: number;
  notificationProps: UINotificationProps;
};

export type NotificationsState = NotificationState[];

const initialState: NotificationsState = [];

export const notificationActions = {
  push: (
    state: NotificationsState,
    notificationProps: UINotificationProps
  ): NotificationsState => {
    const id = getId();
    return [
      ...state,
      {
        id,
        notificationProps,
      },
    ];
  },
  remove: (state: NotificationsState, id: number): NotificationsState => {
    const notificationIndex = state.findIndex((i) => i.id === id);
    if (notificationIndex === -1) {
      console.warn('Notification is already removed');
      return state;
    }

    return state.filter((i) => i.id !== id);
  },
};

export const notificationsState = atom({
  key: 'notifications',
  default: initialState,
});
