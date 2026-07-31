"use client";
import Nav from './Nav';
import MobileNav from './MobileNav';
import { useState } from 'react';

const ResponsiveNav = () => {

    const [showNav,SetShowNav] = useState(false);

    const openNavHandler = ()=> SetShowNav(true);
    const closeNavHandler = ()=> SetShowNav(false);

  return (
    <div>
      <Nav openNav={openNavHandler}/>
      <MobileNav showNav={showNav} closeNav={closeNavHandler}/>  
    </div>
  )
}

export default ResponsiveNav;