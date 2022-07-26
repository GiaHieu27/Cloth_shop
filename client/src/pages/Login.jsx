import LoginForm from "../components/Form/LoginForm";
import RegisterForm from "../components/Form/RegisterForm";

function Login() {
  return (
    <>
      <h2>Dang ki/Dang nhap</h2>
      <div className="login">
        <LoginForm />
        <RegisterForm />
      </div>
    </>
  );
}

export default Login;
