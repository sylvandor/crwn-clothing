import React, {useContext} from "react";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {Link, Outlet} from "react-router-dom";
import {UserContext} from "../../contexts/user/user.context";

import './navigation.styles.scss'
import {signOutUser} from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);

  return (
    <>
      <div className={'navigation'}>
        <Link className={'logo-container'} to={'/'}>
          <CrwnLogo/>
        </Link>
        <div className={'nav-links-container'}>
          <Link className={'nav-link'} to={'/shop'}>
            SHOP
          </Link>
          {currentUser ?
            <span
              className={'nav-link'}
              onClick={signOutUser}>SIGN OUT</span> :
            <Link className={'nav-link'} to={'/auth'}>SIGN IN</Link>}
        </div>
      </div>
      <Outlet/>)}
    </>
  )
}

export default Navigation;