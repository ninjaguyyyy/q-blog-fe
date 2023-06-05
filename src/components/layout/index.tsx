import { ReactNode } from 'react';
import MainNavigation from './MainNavigation';

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="h-screen flex flex-col">
      <MainNavigation />
      <main className="grow h-1">{props.children}</main>
    </div>
  );
};

export default Layout;
