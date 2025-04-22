import { useQuery } from "@tanstack/react-query";
import { getSingleBooking } from "../../services/apiBookings";

export function useReadSingleBooking() {
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: (id) => getSingleBooking(id),
  });

  return { isLoading, booking, error };
}
