import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";

import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;

  @media (min-width: 40rem) {
    width: 39rem;
  }
  @media (min-width: 48rem) {
    width: 47rem;
  }
  @media (min-width: 64rem) {
    width: 63rem;
  }
  @media (min-width: 80rem) {
    width: 79rem;
  }
  @media (min-width: 96rem) {
    width: 95rem;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLogingIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <StyledForm>
      <Form onSubmit={handleSubmit}>
        <FormRow label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLogingIn}
          />
        </FormRow>
        <FormRow label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLogingIn}
          />
        </FormRow>
        <FormRow>
          <Button size="large" disabled={isLogingIn}>
            {!isLogingIn ? "Log In" : <SpinnerMini />}
          </Button>
        </FormRow>
      </Form>
    </StyledForm>
  );
}

export default LoginForm;
