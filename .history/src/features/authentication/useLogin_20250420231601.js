import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (error) => {},
  });
  return { login, isLogingIn };
}
