import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useReadBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { isLoading, bookings, error };
}
