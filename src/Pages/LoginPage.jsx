import AuthForm from "../Components/Auth/AuthForm";

const LoginPage = () => {
  const handleSignIn = () => {};
  return (
    <div>
      <AuthForm
        title="Sign in to continue"
        buttonText="Sign In"
        onSubmit={(data) => handleSignIn(data)}
        formType={"login"}
      />
    </div>
  );
};

export default LoginPage;
