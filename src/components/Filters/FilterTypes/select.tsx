import { FilterItem } from '../types';

export function FilterTypeSelect(props: FilterItem) {
  return (
    <select
      value={props.value}
      onChange={(e) =>
        props.onChange
          ? props.onChange(props.filterKey, e.currentTarget.value)
          : false
      }
    >
      <option value=""></option>
      {props.options &&
        props.options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
    </select>
  );
}
