import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as NavLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/CartIcon.Component";
import CartDropDown from "../../components/cart-dropdown/CartDropDown.Component";

import "./Navigation.Styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="navigation">
        <Link className="nav-logo-container" to="/">
          <NavLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            {currentUser ? (
              <span onClick={signOutHandler}>Sign Out</span>
            ) : (
              <span>Sign In</span>
            )}
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
