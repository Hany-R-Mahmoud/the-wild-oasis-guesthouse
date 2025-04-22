import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckin() {
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "check-in",
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${}`)
    }
  });
}
