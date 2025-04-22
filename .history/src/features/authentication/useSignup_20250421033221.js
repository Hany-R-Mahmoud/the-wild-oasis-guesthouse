import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const {
    data: signup,
    isLoading,
    error,
  } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created, Please verify the new account from the user's email address"
      );
    },
    onError: (err) => throw new Error(err),
  });
  return { signup, isLoading };
}
