import truncate from '~/utils/truncate';
import { UITag } from '../Tag';
import { UICardProps } from './types';
import './style.scss';

export function UICard(props: UICardProps) {
  return (
    <div className="UICard">
      <div className="UICard__thumb">
        <img src={props.thumb} alt={props.name} />
        {props.tags && (
          <div className="UICard__tags">
            {props.tags.map((tag, key) => (
              <UITag {...tag} key={key} />
            ))}
          </div>
        )}
      </div>
      <div className="UICard__body">
        <div className="UICard__name">{props.name}</div>
        <div className="UICard__description">
          {truncate(props.description, 40)}
        </div>
        <div className="UICard__bottom">{props.bottom}</div>
      </div>
    </div>
  );
}
