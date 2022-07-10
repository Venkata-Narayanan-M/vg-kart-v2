import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as NavLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./Navigation.Styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    // setCurrentUser(null);
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
