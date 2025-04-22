import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["login"],
    queryFn: getCurrentUser,
  });
  return { user, isLoading };
}
