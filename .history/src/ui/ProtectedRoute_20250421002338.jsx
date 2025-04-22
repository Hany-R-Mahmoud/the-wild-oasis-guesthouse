import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from './Spinner'


const FullPage = styled

function ProtectedRoute({ children }) {
  // 1- load authenticated user
  const { user, isLoading } = useUser();

  // 2-show spinner
  if(isLoading) return <Spinner/>>

  // 3- if no authenticated user,redirect to /login

  // 4- if there is a user, render the app
  return children;
}

export default ProtectedRoute;
