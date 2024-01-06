import SignUpAuthForm from "../Components/Auth/SignUpAuthForm";

const SignUpPage = () => {
  const handleSignUp = () => {};
  return (
    <SignUpAuthForm
      title="Sign up to join with Us"
      buttonText="Sign Up"
      onSubmit={(data) => handleSignUp(data)}
      linkText="Already have an account?"
      link="/login"
      linkTo="Sign In"
      formType={"signup"}
    />
  );
};

export default SignUpPage;
