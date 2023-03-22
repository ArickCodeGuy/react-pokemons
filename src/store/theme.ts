import { write } from 'fs';
import { atom } from 'recoil';
import { loadFromStorage, writeToStorage } from '~/composables/useLocalStorage';

const THEME_STORAGE_KEY = 'theme';
const removeBodyThemeClasses = () => {
  document.body.classList.remove('light');
  document.body.classList.remove('dark');
};

const setBodyThemeClass = (theme: ThemeState) => {
  removeBodyThemeClasses();
  document.body.classList.add(theme);
};

export type ThemeState = 'light' | 'dark';

const initState = loadFromStorage<ThemeState>(THEME_STORAGE_KEY, 'dark');
setBodyThemeClass(initState);

export const themeActions = {
  set: (newState: ThemeState) => {
    writeToStorage(THEME_STORAGE_KEY, newState);
    setBodyThemeClass(newState);

    return newState;
  },
  change: (state: ThemeState) => {
    let newState: ThemeState;

    if (state === 'light') newState = 'dark';
    else newState = 'light';

    return themeActions.set(newState);
  },
};

export const themeState = atom({
  key: 'theme',
  default: initState,
});
