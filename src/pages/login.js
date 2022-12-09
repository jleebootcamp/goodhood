import "./login.css";
import React from "react";

const Login = () => {
  return (
    <div className="log-form">
      <h2>Login to your account</h2>
      <form className="login">
        <input type="text" title="username" placeholder="username" />
        <input type="password" title="username" placeholder="password" />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
