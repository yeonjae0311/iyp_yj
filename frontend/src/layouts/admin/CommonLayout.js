import { Outlet } from 'react-router-dom';
import Header from '../../outlines/admin/Header';
import Footer from '../../outlines/admin/Footer';
import React from 'react';

const CommonLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(CommonLayout);
