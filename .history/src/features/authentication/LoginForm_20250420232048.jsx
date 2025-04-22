import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";

import { useLogin } from "./useLogin";
import Spinner from "../../ui/Spinner";

function LoginForm() {
  const [email, setEmail] = useState("jonas@sample.com");
  const [password, setPassword] = useState("pass0123");

  const { login, isLogingIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(email, password);
  }

  if (isLogingIn) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow>
        <Button size="large">Login</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
