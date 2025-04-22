import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => { },
    onError: (err)=> 
  })
}
