import { ReactNode } from 'react';

export type UITransitionProps = {
  transitionOut?: true;
  transitionDuration?: number;
  onTransitionOutEnd?: () => void;
  children?: ReactNode;
};
