import { HiOutlineBriefcase } from "react-icons/hi";
import Stat from "./Stat";

function Stats({ bookings, confirmedStays }) {
  const numBookings = bookings.lenght;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Check ins"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Occupancy rate"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
    </>
  );
}

export default Stats;
