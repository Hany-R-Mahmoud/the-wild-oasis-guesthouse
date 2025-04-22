import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useReadSettings } from "./useReadSettings";

function UpdateSettingsForm() {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      breakfastPrice,
    } = {},
    isLoading,
    error,
  } = useReadSettings();

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input defaultValue={minBookingLength} type="number" id="min-nights" />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input defaultValue={maxBookingLength} type="number" id="max-nights" />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          defaultValue={maxGuestPerBooking}
          type="number"
          id="max-guests"
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          defaultValue={breakfastPrice}
          type="number"
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
