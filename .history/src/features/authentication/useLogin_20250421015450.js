import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      navigate("/dashboard", { replace: true });
      // console.log(user);
    },
    onError: (error) => {
      // console.log("ERROR", error);
      toast.error("Provided email or password incorrect");
      throw new Error(error.message);
    },
  });
  return { login, isLogingIn };
}
