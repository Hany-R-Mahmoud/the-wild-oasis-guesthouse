import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { data: activities, isLoading } = useQuery({
    queuryKey: ["todayActivity"],
    queryFn: getStaysTodayActivity,
  });
  return { activities, isLoading };
}
