import Link from 'next/link';
import Logo from './logo';
import classes from './index.module.css';

const MainNavigation = () => {
  const handleClickLogin = () => {
    console.log('click');
  };

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

      <div>
        <Link href="/sign-in">Login</Link>
      </div>
    </header>
  );
};

export default MainNavigation;
