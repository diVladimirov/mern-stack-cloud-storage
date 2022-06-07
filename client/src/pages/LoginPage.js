import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userOperations from "../redux/user/userOperations";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  console.log(isAuth);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispath(userOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={email}
          type="text"
          onChange={handleChange}
          placeholder="Enter email"
        ></input>
        <input
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
          placeholder="Enter password"
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
