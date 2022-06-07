import { useState } from "react";
import { useDispatch } from "react-redux";
import userOperations from "../redux/user/userOperations";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();

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
    dispath(userOperations.createNewUser({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Sign up</h1>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUpPage;
