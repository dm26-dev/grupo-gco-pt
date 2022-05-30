import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    setUser({ ...user, [name]: value });
  }

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container__app">

      <div className="container__app_form">
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
          className="container__app_form_form"
        >
          <div className="">
            <label
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              autoComplete="off"
              placeholder="youremail@company.tld"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className=""
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className=""
              placeholder="*************"
            />
          </div>

          <div className="container__app_form_form_btns">
            <button
              className=""
              type="submit"
            >
              Sign In
            </button>

            <a onClick={handleGoogleSignin}>
              Google +
            </a>

          </div>

        </form>

        <p className="">
          Don't have an account?
          <Link to="/register" className="">
            Register
          </Link>
        </p>
      </div>

    </div>
  );
}
