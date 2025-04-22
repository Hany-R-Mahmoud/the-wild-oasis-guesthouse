import { useQuery } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";

export function useSignup() {
  const { data, isLoading, error } = useQuery({
    queryKey: [''],
    queryFn: signup.
  })
  return {}
}