import { Dictionary } from '~/common/dictionaries/types';
import pokemonStatsDictionary from './pokemonStatsDictionary';
import pokemonTypeBackgroundDictionary from './pokemonTypeBackgroundDictionary';
import pokemonTypeColorDictionary from './pokemonTypeColorDictionary';
import pokemonTypeDictionary from './pokemonTypeDictionary';

export default {
  pokemonType: pokemonTypeDictionary,
  pokemonTypeColor: pokemonTypeColorDictionary,
  pokemonTypeBackground: pokemonTypeBackgroundDictionary,
  pokemonStats: pokemonStatsDictionary,
} as Dictionary;
