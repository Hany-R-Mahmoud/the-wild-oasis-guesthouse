const queryClient = useQueryClient();

const { isLoading: isDeleteing, mutate } = useMutation({
  mutationFn: deleteCabin,
  onSuccess: () => {
    toast.success("Cabin is successfully deleted");
    queryClient.invalidateQueries({
      queryKey: ["cabins"],
    });
  },
  onError: (err) => toast.error(err.message),
});
