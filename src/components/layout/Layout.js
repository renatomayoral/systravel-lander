import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-white bg-blue-700">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
