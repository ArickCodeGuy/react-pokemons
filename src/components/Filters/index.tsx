import { FiltersProps } from './types';
import './style.scss';
import { FilterTypeSelect } from './FilterTypes/select';
import { FilterTypeInput } from './FilterTypes/input';

export function Filters(props: FiltersProps) {
  const handleInput = (key: string, value: string) => {
    const filterIndex = props.items.findIndex(
      (filter) => filter.filterKey === key
    );
    if (filterIndex === -1) throw new Error('index not found');

    const newFilters = [...props.items];
    newFilters[filterIndex].value = value;

    props.updateFilters(newFilters);
  };

  return (
    <div className="Filters">
      <div className="Filters__title h3">{props.title}</div>
      <div className="Filters__items">
        {props.items.map((filter, key) => (
          <label className="filter" key={filter.filterKey + '-' + key}>
            <div className="filter__title">{filter.name}</div>
            <div className="filter__field">
              {filter.type === 'input' && (
                <FilterTypeInput {...filter} onChange={handleInput} />
              )}
              {filter.type === 'select' && (
                <FilterTypeSelect {...filter} onChange={handleInput} />
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
