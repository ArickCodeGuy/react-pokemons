import { loadFromStorage, writeToStorage } from '~/composables/useLocalStorage';
import { atom } from 'recoil';

const CART_STORAGE_KEY = 'cart_storage';

export type CartItem = {
  amount: number;
};

export type CartState = Record<number, CartItem | undefined>;

const initialState = loadFromStorage<CartState>(CART_STORAGE_KEY, {});

export type CartPayload = {
  id: number;
  amount: number;
};

export const cartActions = {
  setItem: (state: CartState, payload: CartPayload): CartState => {
    const newState = {
      ...state,
      [payload.id]: { amount: payload.amount },
    };
    writeToStorage(CART_STORAGE_KEY, newState);

    return newState;
  },
  deleteItem: (state: CartState, payload: CartPayload): CartState => {
    const newState = {
      ...state,
      [payload.id]: undefined,
    };
    writeToStorage(CART_STORAGE_KEY, newState);

    return newState;
  },
};

export const cartState = atom({
  key: 'Cart',
  default: initialState,
});
