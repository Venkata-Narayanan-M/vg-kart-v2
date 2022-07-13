import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as NavLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/CartIcon.Component";
import CartDropDown from "../../components/cart-dropdown/CartDropDown.Component";

import "./Navigation.Styles.jsx";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./Navigation.Styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <NavLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/auth">
            {currentUser ? (
              <span onClick={signOutHandler}>Sign Out</span>
            ) : (
              <span>Sign In</span>
            )}
          </NavLink>
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
