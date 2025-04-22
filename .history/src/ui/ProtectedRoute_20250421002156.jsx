import { useQuery } from "@tanstack/react-query";

function ProtectedRoute({ children }) {
  // 1- load authenticated user
  const { user, isLoading } = useQuery();

  // 2-show spinner

  // 3- if no authenticated user,redirect to /login

  // 4- if there is a user, render the app
  return children;
}

export default ProtectedRoute;
