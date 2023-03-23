import concatStrings from '~/utils/concatStrings';
import './style.scss';
import { UISceletonProps } from './types';

export function UISceleton(props: UISceletonProps) {
  return (
    <div
      className={concatStrings('UISceleton', props.className)}
      style={props.style}
    ></div>
  );
}
