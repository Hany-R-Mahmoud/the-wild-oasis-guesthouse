import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
  });
}
