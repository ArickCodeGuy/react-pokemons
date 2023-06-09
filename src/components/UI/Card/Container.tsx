import { UICard } from '.';
import { UICardContainerProps } from './types';
import './containerStyle.scss';

export function UICardContainer(props: UICardContainerProps) {
  return (
    <div className="UICardContainer">
      {props.items &&
        props.items.map((card, key) => <UICard {...card} key={key} />)}
      {/* for skeletons */}
      {props.children}
    </div>
  );
}
