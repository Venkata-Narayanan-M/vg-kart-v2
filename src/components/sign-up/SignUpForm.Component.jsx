import { useContext, useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/FormInput.Component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.Component";

import "./SignUpForm.Styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords dont match !!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      // setCurrentUser(user);

      setFormFields(defaultFormFields);

      alert("User Creation Successful");
    } catch (e) {
      if (e.code) {
        alert(e.code);
      } else console.log("Error", e.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleChange}
        />
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
        <FormInput
          label="Confirm Password"
          required
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
