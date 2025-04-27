import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";

export function useReadGuests() {
  const {
    data: guests,
    isLoading: isLoadingGuests,
    error,
  } = useQuery({
    queryFn: getGuests,
    queryKey: ["guests"],
  });

  return { guests, isLoadingGuests, error };
}
