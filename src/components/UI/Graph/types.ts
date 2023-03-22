export type UIGraphContainerProps = {
  maxValue: number;
  items: Omit<UIGraphProps, 'maxValue'>[];
};

export type UIGraphProps = {
  name: string;
  value: number;
  maxValue: number;
};
