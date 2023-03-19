import { atom } from 'recoil';
import { FilterItemOption } from '~/components/Filters/types';
import { Dictionary } from '~/types/types';

export const dictionaryState = atom<Dictionary>({
  key: 'dictionary',
  default: {},
});

export const dictionaryKeyToFilterOptions = (
  dictionary: Dictionary,
  dictionaryKey: string
) => {
  if (!dictionary[dictionaryKey]) return [];

  const dictionaryOptions = dictionary[dictionaryKey];
  const FilterItemOption: FilterItemOption[] = [];
  for (const key in dictionaryOptions) {
    FilterItemOption.push({
      text: dictionaryOptions[key],
      value: key,
    });
  }
  return FilterItemOption;
};

export const getDictionaryValue = (
  dictionary: Dictionary,
  key: string,
  value: string
) => dictionary[key] && dictionary[key][value];
