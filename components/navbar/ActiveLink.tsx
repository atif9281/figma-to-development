// components/ActiveLink.tsx
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
}

const ActiveLink = ({ href, children }: ActiveLinkProps) => {
    const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="pb-2 xl:pb-2 2xl:pb-[15px]">
      <Link legacyBehavior href={href}>
        <a className={`link ${isActive ? 'activeLink' : ''}`}>{children}</a>
      </Link>
    </li>
  );
};

export default ActiveLink;
