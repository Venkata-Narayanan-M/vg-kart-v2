import { Outlet, Link } from "react-router-dom";

import { ReactComponent as NavLogo } from "../../assets/crown.svg";
import "./Navigation.Styles.scss";

const Navigation = () => {
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
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;