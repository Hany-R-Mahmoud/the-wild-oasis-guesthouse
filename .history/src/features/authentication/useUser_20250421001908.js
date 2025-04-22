import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data: user, error } = useQuery({
    queryKey: "login",
    queryFn: getCurrentUser,
  });
  return { user, isLoading };
}
