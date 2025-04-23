import AddBooking from "../features/bookings/AddBooking";
import BookingDetail from "../features/bookings/BookingDetail";

function Booking() {
  // this way we are keeping Booking page clean, with no fetching or side-effects
  // manage the development in the features folder
  return (
  <>
  <BookingDetail />
  <AddBooking/>)
  </>
}

export default Booking;
