import "./login.scss";
import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className="login">
      <h1>SIGN IN</h1>
      <form onSubmit={handleLogin}>
        <input
          type="emil"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>wrong email or password or ⬇️</span>}
      </form>
      <div className="signup">
        Create an Account 👉 &nbsp;
        <Link to="/users/new" className="link">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
