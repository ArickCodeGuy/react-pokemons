import { MouseEvent, ReactNode } from 'react';

export type UILinkProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: MouseEvent) => void;
  to?: string;
  children?: ReactNode;
};
