import Button from "../button/Button.Component";

import "./CartDropDown.Styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button buttonType="default">Go To Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
