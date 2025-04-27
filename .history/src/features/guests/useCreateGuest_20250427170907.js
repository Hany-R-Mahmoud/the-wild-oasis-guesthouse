import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGuestApi } from "../../services/apiGuests";
import toast from "react-hot-toast";

export async function useCreateGuest() {
  const queryClient = useQueryClient();

  const { mutate: createGuest, isLoading: isCreatingGuest } = useMutation({
    mutationFn: createGuestApi,
    onSuccess: () => {
      toast.success("New Guest successfuly created");
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createGuest, isCreatingGuest };
}
