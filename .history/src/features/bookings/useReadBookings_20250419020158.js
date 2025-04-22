import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useReadBookings() {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  // filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // :{ field: "totalPrice", value: 5000, method: "gte" };

  // sortBy
  const sortBy = searchParams.get("sortBy");
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedBookings = filter?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", sortedBookings],
    queryFn: () => getBookings({ sortedBookings }),
  });

  return { isLoading, bookings, error };
}
