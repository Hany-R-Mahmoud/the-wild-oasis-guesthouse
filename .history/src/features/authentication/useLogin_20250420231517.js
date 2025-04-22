import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogingIn } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: () => {},
  });
  return { login, isLogingIn };
}
