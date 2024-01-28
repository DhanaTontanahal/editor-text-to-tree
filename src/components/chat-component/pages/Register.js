import React from "react";
import Add from "../../../assets/images/addAvatar.png";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>

          <button>Sign up</button>
        </form>
        <p>You do have an account? Login </p>
      </div>
    </div>
  );
}

export default Register;
