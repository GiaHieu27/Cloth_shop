import { Link } from "react-router-dom";
import { Form, Formik } from "formik";

function RegisterForm() {
  return (
    <div className="login_container sign-in_container">
      <Formik>
        {(formik) => (
          <Form>
            <h1>Dang nhap</h1>
            <div className="login_social">
              <i className="login_social_item bx bxl-facebook"></i>
              <i className="login_social_item bx bxl-google"></i>
              <i className="login_social_item bx bxl-facebook"></i>
            </div>
            <span>hoac su dung tai khoan cua ban</span>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <Link to="/">Quen mat khau</Link>
            <button>Dang nhap</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
