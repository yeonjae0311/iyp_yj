import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../outlines/front/Header';
import Footer from '../../outlines/front/Footer';

const CommonLayout = () => {
  const location = useLocation();
  const path = location.pathname.split('/');
  path.shift();
  let mainClass = path.join('_');
  mainClass = mainClass ? `${mainClass}_page` : `main_page`;
  return (
    <>
      <Header />
      <main className={mainClass}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
