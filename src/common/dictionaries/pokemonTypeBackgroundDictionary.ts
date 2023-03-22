import { DictionaryKey } from '~/types/types';
import { pokemonTypes } from '../pokemonTypes';

export default pokemonTypes.reduce(
  (res, type) => ({
    ...res,
    [type.name]: type.background,
  }),
  {}
) as DictionaryKey;
