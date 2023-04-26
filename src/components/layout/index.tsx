import { ReactNode } from 'react';
import MainNavigation from './main-navigation';

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
