import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddBooking() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="booking-form">
          <Button>Add new Booking</Button>
        </Modal.Open>
        <Modal.Window name="booking-form">
          {/* <CreateCabinForm /> */}
        </Modal.Window>
      </Modal>
    </div>
  );
}
