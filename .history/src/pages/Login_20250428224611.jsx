import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-columns: 1fr; */
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

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

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log into your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
