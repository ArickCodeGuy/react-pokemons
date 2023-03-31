import { UIGraph } from '.';
import { UIGraphContainerProps } from './types';
import './containerStyle.scss';

export function UIGraphContainer(props: UIGraphContainerProps) {
  return (
    <div className="UIGraphContainer scrollbar">
      {props.items.map((i, k) => (
        <UIGraph {...i} maxValue={props.maxValue} key={k} />
      ))}
    </div>
  );
}
