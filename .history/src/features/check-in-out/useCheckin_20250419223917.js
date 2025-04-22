import { useMutation } from "@tanstack/react-query";

export function useCheckin() {
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation();
}
