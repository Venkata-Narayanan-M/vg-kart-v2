import SignUpForm from "../../components/sign-up/SignUpForm.Component";
import SignInForm from "../../components/sign-in/SignInForm.Component";
import "./Authentication.Styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
