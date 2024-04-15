import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";
import IconButton from "./IconButton";

function Login() {
  return (
    <div>
      <div className="custom-container">
        <div className="text-center mb-3 p-1">
          <p>Sign in with:</p>
          <div className="d-inline-flex justify-content-between mx-auto">
            <IconButton />
          </div>
        </div>
        <div className="login">
          <form>
            <div className="text-center mb-3">
              <p>or:</p>
            </div>
            <div className="form-floating mb-4 p-auto">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-4 p-auto">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
              />
              <label htmlFor="floatingInput">Password</label>
            </div>
            <div className="d-flex justify-content-between mx-4 mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label htmlFor="flexCheckDefault" className="form-check-label">
                  Remember Me
                </label>
              </div>
              <a href="!#">Forgot password?</a>
            </div>
            <button type="button" className="btn btn-primary w-100">
              SIGN IN
            </button>
            <p className="text-center">
              Not a member? <a href="#!">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
