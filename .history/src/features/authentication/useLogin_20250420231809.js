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
    onError: (error) => {
      console.log("ERROR", error);
      toast.error("Provided email or password incorrect");
      throw new Error(error.message);
    },
  });
  return { login, isLogingIn };
}
