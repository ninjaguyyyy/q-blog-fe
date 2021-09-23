import MainNavigation from './main-navigation';

const Layout: React.FC = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
