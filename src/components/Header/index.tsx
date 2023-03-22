import { Link } from 'react-router-dom';
import type { HeaderProps } from './types';
import './style.scss';
import { themeActions, themeState } from '~/store/theme';
import { useRecoilState } from 'recoil';
import { UIIcon } from '../UI/Icon';

export function Header({ links }: HeaderProps) {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <header className="Header">
      <div className="container">
        <nav className="header-nav">
          {links.map(({ to, label }) => (
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
