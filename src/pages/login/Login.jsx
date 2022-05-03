import "./login.scss";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = Navigate();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className="login">
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
        {error && <span>wrong email or password</span>}
      </form>
    </div>
  );
};

export default Login;
