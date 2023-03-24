import { FrontNotifications } from '~/components/FrontNotifications';
import { Outlet } from 'react-router-dom';

import { Header } from '~/components/Header';

export function Base() {
  return (
    <>
      <Header />

      <Outlet />

      <FrontNotifications />
    </>
  );
}
