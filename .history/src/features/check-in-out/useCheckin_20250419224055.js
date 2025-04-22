import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";

export function useCheckin() {
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "check-in",
        isPaid: true,
      }),
  });
}
