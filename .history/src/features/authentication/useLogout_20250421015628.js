import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // invalidating cahed data of users to clean the cache
      // we can specify which one,
      queryClient.invalidateQueries({
        queryKey: ["user"],
      // });
      // here we invalidate all
      // queryClient.invalidateQueries();
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoading };
}
