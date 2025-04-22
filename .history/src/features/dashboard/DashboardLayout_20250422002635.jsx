import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useReadCabins } from "../cabins/useReadCabins";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* grid-template-rows: auto 34rem auto; */
  gap: 2.4rem;
`;
// a booking is an actual sale (created-at)
// a stay is an actual checkins for guests when they arrive (started-at)

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    isLoading: isLoadingStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoadingCabins } = useReadCabins();

  if (isLoadingBookings || isLoadingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinsCount={cabins.length}
      />
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Chart stay durations</div>
      <SalesChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
