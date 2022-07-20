import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/FormInput.Component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.Component";

import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";
import "./SignInForm.Styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      setFormFields(defaultFormFields);
    } catch (e) {
      console.log(e.code);
      switch (e.code) {
        case "auth/user-not-found":
          alert("User Not Found");
          break;
        case "auth/wrong-password":
          alert("Invalid Password");
          break;
        default:
          alert("Authentication Failed");
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          required
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
            Sign In
          </Button>
          <Button
            type="button"
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
