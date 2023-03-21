import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { dictionaryController } from '~/api/dictionary';

import { Header } from '~/components/Header';
import { NAV_LINKS } from '~/constants';
import { dictionaryState } from '~/store/dictionary';
import notificationsStoreToUINotifications from '~/utils/notificationsStoreToUINotifications';

export function Base() {
  const [_, setDictionary] = useRecoilState(dictionaryState);

  useEffect(() => {
    dictionaryController.get().then((d) => setDictionary(d));
  }, []);

  return (
    <>
      <Header links={NAV_LINKS} />

      <Outlet />

      {notificationsStoreToUINotifications()}
    </>
  );
}
