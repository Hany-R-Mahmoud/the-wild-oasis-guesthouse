import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";

export function useReadGuests() {
  const { data: guests, errors } = useQuery({
    queryFn: getGuests,
    queryKey: ["guests"],
  });
}
