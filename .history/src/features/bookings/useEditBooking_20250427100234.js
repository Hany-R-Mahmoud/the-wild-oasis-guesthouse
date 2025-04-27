import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditBooking, updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useEditBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editBooking } = useMutation({
    mutationFn: ({ id, newBookingData }) => updateBooking(id, newBookingData),
    onSuccess: () => {
      toast.success("Booking successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editBooking };
}
