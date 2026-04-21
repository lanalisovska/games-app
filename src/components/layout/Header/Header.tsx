import Link from "next/link";
import { Icon } from "@uikit/index";
import { ThemeToggle } from "@components/layout/ThemeToggle/ThemeToggle";
import { headerStyles as s } from "./header.styles";

export const Header = () => (
  <header className={s.header}>
    <div className={s.inner}>
      <Link href="/tournaments" className={s.logo}>
        <Icon name="trophy" size="sm" color="accent" aria-hidden />
        <span className={s.logoText}>GameArena</span>
      </Link>

      <nav className={s.navLinks}>
        <Link href="/bonus" className={s.navLink}>Arcade</Link>
      </nav>

      <nav className={s.nav}>
        <a
          href="https://github.com/lanalisovska/games-app"
          target="_blank"
          rel="noopener noreferrer"
          className={s.githubLink}
          aria-label="GitHub repository"
        >
          <Icon name="github" size="sm" color="current" aria-hidden />
        </a>
        <ThemeToggle />
      </nav>
    </div>
  </header>
);
