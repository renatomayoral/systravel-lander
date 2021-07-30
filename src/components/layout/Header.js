import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-blue-700 shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-30 mr-3">
          <LogoIcon />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-white font-semibold" href="#features">
          HOME
        </AnchorLink>
        <AnchorLink className="px-4 text-white font-semibold" href="#services">
          PREÇOS
        </AnchorLink>
        <AnchorLink className="px-4 text-white font-semibold" href="#stats">
          FUNCIONALIDADES
        </AnchorLink>
        <AnchorLink className="px-4 text-white font-semibold" href="#testimonials">
          RECURSOS
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm font-semibold" >LOGIN</Button>
      </div>
    </div>
  </header>
);

export default Header;
