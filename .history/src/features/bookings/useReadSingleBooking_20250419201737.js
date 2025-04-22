import { useQuery } from "@tanstack/react-query";
import { getSingleBooking } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useReadSingleBooking() {
  const [searchParams] = useSearchParams();

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
