import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import { useEffect, useState } from "react";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useReadSingleBooking } from "../bookings/useReadSingleBooking";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPayment, setConfirmPayment] = useState(false);
  const { booking, isLoading } = useReadSingleBooking();
  const moveBack = useMoveBack();

  useEffect(
    function () {
      if (booking) setConfirmPayment(booking?.isPaid ?? false);
    },
    [booking]
  );

  const { checkin, isCheckingIn } = useCheckin();

  if (isLoading) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  function handleCheckin() {
    if (!confirmPayment) return;
    checkin(bookingId);
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Box>
        <Checkbox
          checked={confirmPayment}
          onChange={() =>
            setConfirmPayment((confirmPayment) => !confirmPayment)
          }
          disabled={confirmPayment || isCheckingIn}
          id="confirm"
        >
          Confirm full payment of {formatCurrency(totalPrice)} for{" "}
          {guests.fullName}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button
          onClick={handleCheckin}
          disabled={!confirmPayment || isCheckingIn}
        >
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
