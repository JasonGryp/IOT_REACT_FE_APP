import React, { useState } from "react";
import useSession from "../hooks/useSession";
import * as Styled from "./Session.style";
import { useDispatch } from "react-redux";
import { attemptLogin, attemptRegister } from "../state/Actions/sessionActions";
const Session = () => {
  const [mode, setMode] = useState(false);
  return (
    <div>
      {mode ? <Login setMode={setMode} /> : <Register setMode={setMode} />}
    </div>
  );
};

export default Session;

const Login = ({ setMode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(attemptLogin({username,password}));
  };
  return (
    <Styled.Container>
      <Styled.Heading>Log in</Styled.Heading>
      <Styled.Form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Log in</button>
      </Styled.Form>
      <Styled.Span>Don't have an account?</Styled.Span>
      <div
        onClick={() => {
          console.log("click");
          setMode(false);
        }}
      >
        <Styled.Anchor>Register</Styled.Anchor>
      </div>
    </Styled.Container>
  );
};
/*----------------------------------------------------------------------------------------------------- */
const Register = ({ setMode }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(attemptRegister({username,email,password}));
  };
  return (
    <Styled.Container>
      <Styled.Heading>Register</Styled.Heading>
      <Styled.Form onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Register</button>
      </Styled.Form>
      <Styled.Span>Already have an account?</Styled.Span>
      <div
        onClick={() => {
          console.log("click");
          setMode(true);
        }}
      >
        <Styled.Anchor>Log in</Styled.Anchor>
      </div>
    </Styled.Container>
  );
};
