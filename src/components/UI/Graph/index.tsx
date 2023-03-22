import { UIGraphProps } from './types';
import './style.scss';

export function UIGraph(props: UIGraphProps) {
  const graphCells = () => {
    const arr: boolean[] = [];
    for (let i = 0; i < props.maxValue; i++) {
      arr.push(i <= props.value);
    }
    return arr
      .reverse()
      .map((i, k) => (
        <div
          className={`graph__cell${i ? ' graph__cell--filled' : ''}`}
          key={k}
        ></div>
      ));
  };

  return (
    <div className="UIGraph">
      <div className="UIGraph__name">{props.name}</div>
      <div className="graph">{graphCells()}</div>
    </div>
  );
}
