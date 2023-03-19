export type FilterTypes = 'input' | 'select';

export type FilterItemOption = {
  text: string;
  value: string;
};

export type FilterItem = {
  name: string;
  filterKey: string;
  value: string;
  type: FilterTypes;
  options?: FilterItemOption[];
  onChange?: (key: string, newValue: string) => void;
};

export type Filters = {};

export type FiltersProps = {
  title: string;
  items: FilterItem[];
  updateFilters: (f: FilterItem[]) => void;
};
