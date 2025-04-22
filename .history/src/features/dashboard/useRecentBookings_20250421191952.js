import { useQuery } from "@tanstack/react-query";

export function useRecentBookings() {
  const { data, isLoading } = useQuery({
    queryKey: [],
  });
}
