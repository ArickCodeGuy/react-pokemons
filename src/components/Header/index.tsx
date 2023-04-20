import { Link } from 'react-router-dom';
import type { HeaderProps, NavLinkProps } from './types';
import './style.scss';
import { themeActions, themeState } from '~/store/theme';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UIIcon } from '../UI/Icon';
import { useEffect, useRef, useState } from 'react';
import { ElementFixer } from '~/utils/ElementFixer';
import { compareState } from '~/store/compare';
import { UILink } from '../UI/Link/UILink';

export const NAV_LINKS = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/pokedex',
    label: 'Pokedex',
  },
] as NavLinkProps[];

export function Header(props: HeaderProps) {
  const [theme, setTheme] = useRecoilState(themeState);
  const compare = useRecoilValue(compareState);

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
            <UILink className="header-nav-link" key={label} to={to}>
              {label}
            </UILink>
          ))}
          <UILink className="header-nav-link" to="/compare">
            Compare
            {(Object.keys(compare).length && (
              <div className="header-nav-link__notif">
                {Object.keys(compare).length}
              </div>
            )) ||
              ''}
          </UILink>
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
