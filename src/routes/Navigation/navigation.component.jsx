import React, {useContext} from "react";
import {Outlet} from "react-router-dom";
import {UserContext} from "../../contexts/user/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart/cart.context";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {LogoContainer, NavigationContainer, NavLink, NavLinksContainer} from './navigation.styles.jsx'

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {open} = useContext(CartContext);

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