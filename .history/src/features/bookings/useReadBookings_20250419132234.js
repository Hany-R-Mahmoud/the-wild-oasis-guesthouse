import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useReadBookings() {
  const [searchParams] = useSearchParams();

  // filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // :{ field: "totalPrice", value: 5000, method: "gte" };

  // sortBy
  const sortByRow = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  const {
    isLoading,
    // data: bookings,
    // count,
    data: { data: bookings, count },
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings, count, error };
}
