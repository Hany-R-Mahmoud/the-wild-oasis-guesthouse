import { useQuery } from "@tanstack/react-query";
import { createGuest } from "../../services/apiGuests";

export async function useCreateGuest() {
  const queryClient = useQuery();

  const { data: guest, isLoading: isCreatingGuest } = useMutation({
    mutationFn: createGuest,
    onSuccess: () => {},
  });
}
