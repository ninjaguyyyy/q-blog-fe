import { ReactNode } from 'react';
import MainNavigation from './main-navigation';

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="h-screen flex flex-col">
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
