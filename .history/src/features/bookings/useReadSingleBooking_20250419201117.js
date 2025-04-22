import { getSingleBooking } from "../../services/apiBookings";

export function useReadSingleBooking() {
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getSingleBooking,
  });

  return { isLoading, cabins, error };
}
