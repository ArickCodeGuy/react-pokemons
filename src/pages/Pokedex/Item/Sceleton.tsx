import { UISceleton } from '~/components/UI/Skeleton';
import { UISceletonHeading } from '~/components/UI/Skeleton/types/heading';
import { UISceletonSquare } from '~/components/UI/Skeleton/types/square';
import { UISceletonText } from '~/components/UI/Skeleton/types/text';

export function PokedexItemSceleton() {
  return (
    <>
      <section className="section">
        <div className="container">
          <UISceletonHeading />
          <div className="row">
            <div className="col-lg-6">
              <UISceletonSquare />
            </div>
            <div className="col-lg-6">
              <UISceletonText />
              <UISceletonText />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
