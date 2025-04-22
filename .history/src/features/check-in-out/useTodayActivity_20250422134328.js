import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { data: stays, isLoading } = useQuery({
    queuryKey: ["today-activity"],
    queryFn: getStaysTodayActivity,
  });
  return { stays, isLoading };
}
