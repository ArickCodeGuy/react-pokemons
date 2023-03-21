import { Link } from 'react-router-dom';
import type { HeaderProps } from './types';
import './style.scss';

export function Header({ links }: HeaderProps) {
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
        <div className="theme-changer"></div>
      </div>
    </header>
  );
}
