import { UISceleton } from '../Skeleton';
import { UILoader } from '../Loader';
import './sceletonStyle.scss';

export function UITableSceleton() {
  return (
    <div className="UITableSceleton">
      <UISceleton />
      <UILoader />
    </div>
  );
}
