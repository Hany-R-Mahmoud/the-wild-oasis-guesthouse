import { useNavigate } from "react-router-dom";
import AddBooking from "../features/bookings/AddBooking";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";

function Bookings() {
  const navigate = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <Button onClick={() => navigate("newBooking")}>Add new Booking</Button>
      <AddBooking />

      <BookingTable />
    </>
  );
}

export default Bookings;
