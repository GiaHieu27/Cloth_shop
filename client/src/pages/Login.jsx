import LoginForm from "../components/Form/RegisterForm";
import RegisterForm from "../components/Form/LoginForm";

function Login() {
  return (
    <>
      <h2>Dang ki/Dang nhap</h2>
      <div className="login">
        <LoginForm />
        <RegisterForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chao mung tro lai</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              <button className="ghost-button">Dang ki</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
