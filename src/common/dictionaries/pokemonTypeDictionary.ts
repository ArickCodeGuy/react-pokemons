import { DictionaryKey } from '~/common/dictionaries/types';
import { pokemonTypes } from '../pokemonTypes';

export default pokemonTypes.reduce(
  (res, type) => ({
    ...res,
    [type.name]: type.name,
  }),
  {}
) as DictionaryKey;
