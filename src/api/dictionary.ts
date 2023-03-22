import dictionary from '~/common/dictionaries';
import { Dictionary } from '~/types/types';

export const fetchDictionary = (): Promise<Dictionary> =>
  new Promise((res) => {
    const result: Dictionary = dictionary;
    setTimeout(() => {
      res(result);
    }, 500);
  });

export const dictionaryController = {
  get: fetchDictionary,
};
