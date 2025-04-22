import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

export function useDeleteBooking() {
  const { navigate } = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking is successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["Bookings"],
      });
      navigate(-1);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}
