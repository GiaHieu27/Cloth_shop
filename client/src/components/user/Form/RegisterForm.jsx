import { Form, Formik } from "formik";

function LoginForm() {
  return (
    <div className="login_container sign-up_container">
      <Formik>
        {(formik) => (
          <Form>
            <h1>Dang ky</h1>
            <div className="login_social">
              <i className="login_social_item bx bxl-facebook"></i>
              <i className="login_social_item bx bxl-google"></i>
              <i className="login_social_item bx bxl-facebook"></i>
            </div>
            <span>hoac dang ky tai khoan</span>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button>Dang ky</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
