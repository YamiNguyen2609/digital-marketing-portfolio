'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Achievements' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar" aria-label="Main navigation">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`nav-link${pathname === href ? ' active' : ''}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
