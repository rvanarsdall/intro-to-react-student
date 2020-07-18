import React, { useState } from "react";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const title = isLogin ? "Login" : "Signup";

  return (
    <div>
      <form action="">
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name=""
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name=""
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Login/Signup Toggle</button>
        <button type="submit">Submit User Data</button>
      </form>
    </div>
  );
};

export default Auth;
