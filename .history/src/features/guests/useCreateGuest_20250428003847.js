import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createGuestApi } from "../../services/apiGuests";
import { useState } from "react";

export function useCreateGuest() {
  const [guestData, setGuestData] = useState(null);
  const queryClient = useQueryClient();

  const { mutate: createGuest, isLoading: isCreatingGuest } = useMutation({
    mutationFn: createGuestApi,
    onSuccess: (data) => {
      toast.success("New Guest successfuly created");
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });

      setGuestData(data);
    },
    onError: (err) => toast.error(err.message),
  });

  return { createGuest, isCreatingGuest, guestData };
}
