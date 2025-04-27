import { useMutation, useQuery } from "@tanstack/react-query";
import { createGuest } from "../../services/apiGuests";
import toast from "react-hot-toast";

export async function useCreateGuest() {
  const queryClient = useQuery();

  const { data: guest, isLoading: isCreatingGuest } = useMutation({
    mutationFn: createGuest,
    onSuccess: () => {
      toast.success("New Guest successfuly created");
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
}
