import { ReactNode } from 'react';

export type UITagContainerProps = {
  tags: UITagProps[];
};

export type UITagProps = {
  background?: string;
  color?: string;
  size?: 'small';
  children?: ReactNode;
};
