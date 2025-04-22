import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";

export function useSignup() {
  const { data, isLoading, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => {},
  });
  return {};
}
