import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteBooking(id) {
  const queryClient = useQueryClient();

  const { isLoading: isDeleteing, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBooking(id),
    onSuccess: () => {
      toast.success("Booking is successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["Bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleteing, deleteBooking };
}
