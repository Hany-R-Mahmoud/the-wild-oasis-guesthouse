import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { data: todayActivity, isLoading } = useQuery({
    queuryKey: ["today-activity"],
    queryFn: getStaysTodayActivity,
  });
  return { todayActivity, isLoading };
}
