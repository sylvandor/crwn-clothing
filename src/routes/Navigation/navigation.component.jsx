import React from "react";
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {signOutUser} from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {selectCurrentUser} from "../../store/user/user.selectors";
import {selectOpen} from "../../store/cart/cart.selectors";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {LogoContainer, NavigationContainer, NavLink, NavLinksContainer} from './navigation.styles.jsx'

const Navigation = () => {
  const open = useSelector(selectOpen);
  const currentUser = useSelector(selectCurrentUser)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <CrwnLogo/>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to={'/shop'}>SHOP</NavLink>
          {currentUser ?
            <NavLink as={'span'}
              className={'nav-link'}
              onClick={signOutUser}>SIGN OUT</NavLink> :
            <NavLink className={'nav-link'} to={'/auth'}>SIGN IN</NavLink>}
        <CartIcon/>
        </NavLinksContainer>
        {open && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </>
  )
}

export default Navigation;