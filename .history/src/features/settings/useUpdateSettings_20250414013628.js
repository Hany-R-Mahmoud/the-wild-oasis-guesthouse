import { useMutation } from "@tanstack/react-query";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate } = useMutation({
    mutationFn: ({ newSettings }) => createEditCabin(newSettings),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
