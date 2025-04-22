import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate } = useMutation({
    mutationFn: ({ newSetting }) => createEditCabin(newSetting),
    onSuccess: () => {
      toast.success("Setting successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
