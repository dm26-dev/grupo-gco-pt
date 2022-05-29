import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";

export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
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
          <div>
            <label
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="youremail@company.tld"
            />
          </div>

          <div>
            <label
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="*************"
            />
          </div>

          <div className="container__app_form_form_btn">
            <button
              type="submit"
              className="container__app_form_form_btns_reg"
            >
              Register
            </button>
          </div>

        </form>

        <p className="">
          Already have an Account?
          <Link to="/login" className="">
            Login
          </Link>
        </p>

      </div>



    </div>
  );
}
