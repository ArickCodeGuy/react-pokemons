import { ReactNode } from 'react';

export type UIButtonProps = {
  type?: 'button' | 'submit';
  to?: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
};
