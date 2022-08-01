import { useRef } from "react";
import LoginForm from "../../components/user/Form/LoginForm";
import RegisterForm from "../../components/user/Form/RegisterForm";

function Login() {
  const loginRef = useRef(null);

  return (
    <div className="wrap">
      <div className="login" ref={loginRef}>
        <LoginForm />
        <RegisterForm />
        <div className="login_overlay">
          <div className="login_overlay_container">
            <div className="login_overlay_panel login_overlay_left">
              <h1>Chao mung tro lai</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              <button
                className="ghost"
                onClick={() =>
                  loginRef.current.classList.remove("right_panel_active")
                }
              >
                Dang nhap
              </button>
            </div>
            <div className="login_overlay_panel login_overlay_right">
              <h1>Xin chao</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              <button
                className="ghost"
                onClick={() =>
                  loginRef.current.classList.add("right_panel_active")
                }
              >
                Dang ky
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
