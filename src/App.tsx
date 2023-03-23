import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { dictionaryController } from './api/dictionary';
import { Router } from './router';
import { dictionaryState } from './store/dictionary';

export function App() {
  const [_, setDictionary] = useRecoilState(dictionaryState);

  useEffect(() => {
    dictionaryController.get().then((d) => setDictionary(d));
  }, []);

  return <Router />;
}
