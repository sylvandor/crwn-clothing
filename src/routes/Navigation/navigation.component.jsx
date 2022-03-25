import React from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {Link, Outlet} from "react-router-dom";

import './navigation.styles.scss'

const Navigation = () =>
  <>
    <div className={'navigation'}>
      <Link className={'logo-container'} to={'/'}>
        <CrwnLogo/>
      </Link>
      <div className={'nav-links-container'}>
        <Link className={'nav-link'} to={'/shop'}>
          SHOP
        </Link>
        <Link className={'nav-link'} to={'/sign-in'}>
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet/>
  </>

export default Navigation;