import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditB } from "../../services/apiBs";

export function useCreateBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createBooking } = useMutation({
    mutationFn: createEditBooking,
    onSuccess: () => {
      toast.success("New Booking successfuly created");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createBooking };
}
