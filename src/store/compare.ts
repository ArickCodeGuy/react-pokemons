import { loadFromStorage, writeToStorage } from '~/composables/useLocalStorage';
import { atom } from 'recoil';

const COMPARE_STORAGE_KEY = 'compare_store';

export type CompareState = Record<number, boolean | undefined>;

const initialState = loadFromStorage<CompareState>(COMPARE_STORAGE_KEY, {});

export const compareActions = {
  addItem: (state: CompareState, payload: number): CompareState => {
    const newState = {
      ...state,
      [payload]: true,
    };
    writeToStorage(COMPARE_STORAGE_KEY, newState);

    return newState;
  },
  removeItem: (state: CompareState, payload: number): CompareState => {
    const newState = {
      ...state,
    };
    delete newState[payload];
    writeToStorage(COMPARE_STORAGE_KEY, newState);

    return newState;
  },
};

export const compareState = atom({
  key: 'Compare',
  default: initialState,
});
