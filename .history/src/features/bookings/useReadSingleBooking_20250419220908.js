import { useQuery } from "@tanstack/react-query";
import { getSingleBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useReadSingleBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getSingleBooking(bookingId),
    retry: false,
  });

  return { isLoading, booking, error };
}
