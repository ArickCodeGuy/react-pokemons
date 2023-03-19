import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '~/routes';
import { RecoilRoot } from 'recoil';

export function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  );
}
