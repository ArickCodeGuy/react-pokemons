import { Route, Routes } from 'react-router-dom';

import { Base } from '~/layouts/Base';
import { Catalog } from '~/pages/Catalog';
import { CatalogItem } from '~/pages/Catalog/Item';
import { Compare } from '~/pages/Compare';
import { Home } from '~/pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogItem />} />
        <Route path="/compare" element={<Compare />} />
      </Route>
    </Routes>
  );
}
