import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button.Component";

import CartItem from "../cart-item/CartItem.Component";
import "./CartDropDown.Styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
      </div>
      <Button buttonType="" onClick={gotoCheckoutHandler}>
        Go To Checkout
      </Button>
    </div>
  );
};

export default CartDropDown;
