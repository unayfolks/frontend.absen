import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const credentials = {
    email,
    password,
  };
  const login = async (e) => {
    e.preventDefault();
    let response = await axios.post("login", credentials);
    console.log(response);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header">login</div>
            <div className="card-body">
              <form onSubmit={login}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
