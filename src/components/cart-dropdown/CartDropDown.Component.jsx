import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.Component";

import CartItem from "../cart-item/CartItem.Component";
import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItems,
} from "./CartDropDown.Styles";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessageContainer> Cart is empty</EmptyMessageContainer>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={gotoCheckoutHandler}
      >
        Go To Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
