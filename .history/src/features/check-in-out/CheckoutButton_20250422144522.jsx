import Button from "../../ui/Button";

function CheckoutButton({ bookingId }) {
  const { chekout, isLoading } = useCheckout();

  return (
    <Button variation="primary" size="small">
      Check out
    </Button>
  );
}

export default CheckoutButton;
