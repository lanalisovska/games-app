"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navTabsStyles as s } from "./navTabs.styles";

const TABS = [
  { href: "/tournaments", label: "Tournaments" },
  { href: "/bonus", label: "Arcade" },
  { href: "/adult", label: "18+" },
];

export const NavTabs = () => {
  const pathname = usePathname();

  return (
    <nav className={s.nav} aria-label="Main navigation">
      <div className={s.inner}>
        {TABS.map(({ href, label }) => (
          <Link key={href} href={href} className={s.tab(pathname.startsWith(href))}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
