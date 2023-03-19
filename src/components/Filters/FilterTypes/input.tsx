import { FilterItem } from '../types';

export function FilterTypeInput(props: FilterItem) {
  return (
    <>
      <input
        value={props.value}
        onChange={(e) =>
          props.onChange
            ? props.onChange(props.filterKey, e.currentTarget.value)
            : false
        }
      />
    </>
  );
}
