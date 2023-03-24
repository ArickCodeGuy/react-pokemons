import { FrontNotifications } from '~/components/FrontNotifications';
import { Outlet } from 'react-router-dom';

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export function Base() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />

      <FrontNotifications />
    </>
  );
}
