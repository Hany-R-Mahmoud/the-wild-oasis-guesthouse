import { useQuery } from "@tanstack/react-query";

export function useTodayActivity() {
  const { data, isLoading } = useQuery({
    queuryKey: ["bookings"],
    queryFn: getStaysTodayActivity,
  });
}
