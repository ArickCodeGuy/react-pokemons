import { ReactNode } from 'react';

export type UINotificationContainerProps = {
  items: UINotificationProps[];
};

export type UINotificationType = 'SUCCESS' | 'WARN' | 'ERROR' | 'NEUTRAL';

export type UINotificationProps = {
  text?: string;
  children?: ReactNode;
  type?: UINotificationType;
  onCloseClick?: () => void;
};
