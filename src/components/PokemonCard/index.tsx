import './style.scss';
import { PokemonCardProps } from './types';
import truncate from '~/utils/truncate';
import { UIButton } from '~/components/UI/Button';
import { UITag } from '../UI/Tag';

export function PokemonCard(props: PokemonCardProps) {
  return (
    <div className="PokemonCard">
      <div className="PokemonCard__thumb">
        <img src={props.thumb} alt={props.name} />
        {props.tags && (
          <div className="PokemonCard__tags">
            {props.tags.map((tag) => (
              <UITag key={tag.text} size="small" background={tag.background}>
                {tag.text}
              </UITag>
            ))}
          </div>
        )}
      </div>
      <div className="PokemonCard__body">
        <div className="PokemonCard__name">{props.name}</div>
        <div className="PokemonCard__description">
          {truncate(props.description, 40)}
        </div>
        <div className="PokemonCard__bottom">{props.bottom}</div>
        <div className="PokemonCard__bottom">
          <UIButton
            className="PokemonCard__link"
            onClick={() =>
              props.linkClick ? props.linkClick(props.id) : false
            }
          >
            Pokemon page
          </UIButton>
        </div>
      </div>
    </div>
  );
}
