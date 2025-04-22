import { useMutation } from "@tanstack/react-query";

export function useLogout() {
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => { },
    onError: (err)=> 
  })
}
