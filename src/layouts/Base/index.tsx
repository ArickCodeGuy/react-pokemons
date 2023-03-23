import { FrontNotifications } from '~/components/FrontNotifications';
import { Outlet } from 'react-router-dom';

import { Header } from '~/components/Header';
import { NAV_LINKS } from '~/constants';

export function Base() {
  return (
    <>
      <Header links={NAV_LINKS} />

      <Outlet />

      <FrontNotifications />
    </>
  );
}
