import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const {
    data: signup,
    isLoading,
    error,
  } = useMutation({
    mutationFn: signuApi,
    onSuccess: () => {},
  });
  return { signup, isLoading };
}
