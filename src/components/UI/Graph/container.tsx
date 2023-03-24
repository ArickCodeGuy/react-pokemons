import { UIGraph } from '.';
import { UIGraphContainerProps } from './types';
import './containerStyle.scss';

export function UIGraphContainer(props: UIGraphContainerProps) {
  return (
    <div className="UIGraphContainer">
      {props.items.map((i) => (
        <UIGraph {...i} maxValue={props.maxValue} />
      ))}
    </div>
  );
}