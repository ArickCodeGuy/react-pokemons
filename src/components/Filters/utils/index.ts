import { FilterItem } from '../types';

export const filterInputToRequestParam = (filter: FilterItem): string => {
  return `${filter.filterKey}=${filter.value}`;
};

export const filterSelectToRequestParam = (filter: FilterItem): string => {
  return `${filter.filterKey}=${filter.value}`;
};

export const filtersToRequestParams = (filters: FilterItem[]): string => {
  return filters
    .filter((filter) => filter.value !== '')
    .map((filter) => {
      if (filter.type === 'input') return filterInputToRequestParam(filter);
      if (filter.type === 'select') return filterSelectToRequestParam(filter);
    })
    .join('&');
};
