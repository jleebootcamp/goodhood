import "./login.css";
import React from "react";

const login = () => {
  return (
<div class="log-form">
<h2>Login to your account</h2>
<form class="login">
  <input type="text" title="username" placeholder="username" />
  <input type="password" title="username" placeholder="password" />
  <button type="submit" class="btn">Login</button>
</form>
</div>
  );
};

export default login;