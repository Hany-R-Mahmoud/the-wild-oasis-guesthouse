import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createGuestApi } from "../../services/apiGuests";

export function useCreateGuest() {
  const queryClient = useQueryClient();

  const { mutate: createGuest, isLoading: isCreatingGuest } = useMutation({
    mutationFn: createGuestApi,
    onSuccess: (data) => {
      toast.success("New Guest successfuly created");
      queryClient.invalidateQueries({
        queryKey: ["guests"],
        return data
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createGuest, isCreatingGuest };
}
