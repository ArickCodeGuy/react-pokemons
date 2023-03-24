import { Link } from 'react-router-dom';
import type { HeaderProps, NavLinkProps } from './types';
import './style.scss';
import { themeActions, themeState } from '~/store/theme';
import { useRecoilState } from 'recoil';
import { UIIcon } from '../UI/Icon';
import { useEffect, useRef } from 'react';
import { ElementFixer } from '~/utils/ElementFixer';

export const NAV_LINKS = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/pokedex',
    label: 'Pokedex',
  },
  {
    to: '/compare',
    label: 'Compare',
  },
] as NavLinkProps[];

export function Header(props: HeaderProps) {
  const [theme, setTheme] = useRecoilState(themeState);

  const header = useRef<HTMLElement>(null);
  let fixer: ReturnType<typeof ElementFixer>;

  useEffect(() => {
    if (!header.current) return;

    if (!fixer) {
      fixer = ElementFixer(header.current);
    } else {
      fixer.init();
    }

    return fixer.destroy;
  }, []);

  return (
    <header className="Header" ref={header}>
      <div className="container">
        <nav className="header-nav">
          {NAV_LINKS.map(({ to, label }) => (
            <Link className="header-nav__link" key={label} to={to}>
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="theme-changer"
          onClick={() => setTheme(themeActions.change(theme))}
        >
          <UIIcon
            class="theme-changer__icon"
            name={theme === 'light' ? 'moon' : 'sun'}
          />
        </button>
      </div>
    </header>
  );
}
