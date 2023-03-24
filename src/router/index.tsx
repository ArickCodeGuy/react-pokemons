import { Route, Routes } from 'react-router-dom';
import { Base } from '~/layouts/Base';

import { Pokedex } from '~/pages/Pokedex';
import { PokedexItem } from '~/pages/Pokedex/Item';
import { Compare } from '~/pages/Compare';
import { Home } from '~/pages/Home';

export function Router() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokedexItem />} />
        <Route path="/compare" element={<Compare />} />
      </Route>
    </Routes>
  );
}
