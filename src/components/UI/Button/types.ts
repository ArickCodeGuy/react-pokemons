import { ReactNode } from 'react';

export type UIButtonProps = {
  type?: 'button' | 'submit';
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};
