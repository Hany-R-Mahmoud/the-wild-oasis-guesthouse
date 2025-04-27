import { useNavigate } from "react-router-dom";
import AddBooking from "../features/bookings/AddBooking";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  const navigate = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <button onClick={() => navigate(`/bookings/${bookingId}`)}>go</button>
      <AddBooking />

      <BookingTable />
    </>
  );
}

export default Bookings;
