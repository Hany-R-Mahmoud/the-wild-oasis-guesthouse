import { useQuery } from "@tanstack/react-query";

export async function useCreateGuest() {
  const queryClient = useQuery()

  const { data: guest, isLoading: isCreatingGuest } = useMutation({
    mutationFn: 
  })
}
