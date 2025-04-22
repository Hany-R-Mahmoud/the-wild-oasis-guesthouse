import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1- load authenticated user (reading API)
  const { user, isLoading, isAuthenticated } = useUser();

  // 2-show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 3- if no authenticated user,redirect to /login
  useEffect(function () {}, [isAuther]);

  // 4- if there is a user, render the app
  return children;
}

export default ProtectedRoute;
