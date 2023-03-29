import { FilterItem } from '~/components/Filters/types';

const filterItemTypeToFilterType = {
  input: 'LIKE',
  select: 'EQUALS',
} as const;

export function filterItemArrToQueryString(
  filterItemArr: FilterItem[]
): string {
  return filterItemArr
    .filter((i) => i.value)
    .map(
      (i) => `${i.filterKey}=${i.value},${filterItemTypeToFilterType[i.type]}`
    )
    .join('&');
}
