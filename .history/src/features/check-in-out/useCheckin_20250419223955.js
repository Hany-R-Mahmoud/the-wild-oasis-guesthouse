import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";

export function useCheckin() {
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookinId) => updateBooking(bookingId),
  });
}
