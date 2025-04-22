import { HiOutlineBriefcase } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes } from "react-icons/hi2";

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
        color="green"
        icon={<HiOutlineBanknotes />}
        value={numBookings}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlinecalende />}
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
