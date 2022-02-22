import Link from 'next/link';
import Logo from '@/components/Logo';
import { StyledNav } from './MainNavigation.style';

function MainNavigation() {
  return (
    <StyledNav>
      <header className="header">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </StyledNav>
  );
}

export default MainNavigation;
