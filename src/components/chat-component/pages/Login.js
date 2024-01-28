import React from "react";
import Add from "../../../assets/images/addAvatar.png";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
        </form>
        <p>You do have an account? Register </p>
      </div>
    </div>
  );
}

export default Login;
