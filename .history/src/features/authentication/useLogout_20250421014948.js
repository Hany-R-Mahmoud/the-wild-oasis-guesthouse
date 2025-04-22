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
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoading };
}
