import { UITag } from '.';
import { UITagContainerProps } from './types';
import './containerStyle.scss';

export function UITagContainer(props: UITagContainerProps) {
  return (
    <div className="UITagContainer">
      {props.tags.map((tag, key) => (
        <UITag {...tag} key={key} />
      ))}
    </div>
  );
}
