import { ReactNode } from 'react';
import { UITagProps } from '../Tag/types';

export type UICardContainerProps = {
  children?: ReactNode;
  items: UICardProps[];
};

export type UICardProps = {
  id: number;
  thumb: string;
  name: string;
  description: string;
  tags?: UITagProps[];
  bottom?: ReactNode;
};
