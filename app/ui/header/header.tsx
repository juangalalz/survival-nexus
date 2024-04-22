'use client';

import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Survivors',
    href: '/survivors',
  },
  { name: 'Inventory', href: '/inventory' },
];

export default function Header() {
  const pathname = usePathname();
  console.log('pathname', pathname);

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image
            src='/survival_logo.png'
            width={15}
            height={19}
            alt='Application logo'
          />
        </div>
        <p className={styles.logoText}>Survival Nexus</p>
      </div>
      <nav>
        <ul className={styles.ul}>
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  className={clsx(
                    styles.link,
                    pathname === link.href && styles.linkSelected
                  )}
                  href={link.href}
                >
                  <p>{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
