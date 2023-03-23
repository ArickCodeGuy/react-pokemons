import { UISceleton } from '..';
import './textStyle.scss';

export function UISceletonText() {
  return (
    <div className="UISceletonText">
      <UISceleton />
      <UISceleton />
      <UISceleton />
    </div>
  );
}
