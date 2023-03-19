import { Link } from 'react-router-dom';
import type { HeaderProps } from './types';
import './style.scss';

export function Header({ links }: HeaderProps) {
  return (
    <header className="Header">
      {links.map(({ to, label }) => (
        <Link className="Header__link" key={label} to={to}>
          {label}
        </Link>
      ))}
    </header>
  );
}
