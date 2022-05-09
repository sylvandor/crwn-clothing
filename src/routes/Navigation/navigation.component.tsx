import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {selectCurrentUser} from "../../store/user/user.selectors";
import {selectOpen} from "../../store/cart/cart.selectors";
import {signOutStart} from "../../store/user/user.actions";

import {LogoContainer, NavigationContainer, NavLink, NavLinksContainer} from './navigation.styles'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

const Navigation = () => {
  const dispatch = useDispatch()
  const open = useSelector(selectOpen);
  const currentUser = useSelector(selectCurrentUser)

  const signOutOnClick = () => {
    dispatch(signOutStart());
  }

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
              onClick={signOutOnClick}>SIGN OUT</NavLink> :
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