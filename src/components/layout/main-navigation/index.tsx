import { Button } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import classes from './index.module.css';
import Logo from './logo';

const MainNavigation = () => {
  const { data: session } = useSession();

  return (
    <header className={classes.header}>
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

      <div>{session ? <Button onClick={() => signOut()}>Logout</Button> : <Link href="/sign-in">Login</Link>}</div>
    </header>
  );
};

export default MainNavigation;
