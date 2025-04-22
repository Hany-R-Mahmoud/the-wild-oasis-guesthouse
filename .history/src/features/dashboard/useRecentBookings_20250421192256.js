import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const { data, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookingsAfterDate,
  });
}
