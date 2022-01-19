import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <h4>Login</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="text_area">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="text_input"
          />
        </div>
        <input type="submit" value="LOGIN" className="btn" />
      </form>
      <a className="link" href="/signup">
        Sign Up
      </a>
    </div>
  );
}

export default Login;
