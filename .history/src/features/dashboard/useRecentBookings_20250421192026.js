import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const { data, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookingsAfterDate,
  });
}
