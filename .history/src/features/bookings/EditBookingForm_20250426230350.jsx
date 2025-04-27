import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

import FormRow from "../../ui/FormRow";

import { useEditBooking } from "./useEditBooking";

function EditBookingForm({ bookingToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = bookingToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { isEditing, editBooking } = useEditBooking();

  function onSubmit(data) {
    editBooking(
      { ...data, id: editId },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  return (
    // cabin name, prices, should come from saved cabins, just by choosing a cabin
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin name" error={errors?.cabins?.name.message}>
        <Input
          type="text"
          id="cabins.name"
          disabled={isEditing}
          {...register("cabins.name", {
            required: "This field is required",
          })}
          autoComplete="off"
        />
      </FormRow>
      <FormRow label="Guest name" error={errors?.guests?.fullName.message}>
        <Input
          type="text"
          id="guests.fullName"
          disabled={isEditing}
          {...register("guests.fullName", {
            required: "This field is required",
          })}
          autoComplete="off"
        />
      </FormRow>
      <FormRow label="Guest email" error={errors?.guests?.email.message}>
        <Input
          type="text"
          id="guests.email"
          disabled={isEditing}
          {...register("guests.email", {
            required: "This field is required",
          })}
          autoComplete="off"
        />
      </FormRow>

      <FormRow label="Status" error={errors?.status?.message}>
        <Input
          type="text"
          id="status"
          disabled={isEditing}
          {...register("status", {
            required: "This field is required",
          })}
          autoComplete="off"
        />
      </FormRow>

      <FormRow label="Start date" error={errors?.startDate?.message}>
        <Input
          type="text"
          id="startDate"
          disabled={isEditing}
          {...register("startDate", {
            required: "This field is required",
          })}
          autoComplete="off"
        />
      </FormRow>
      <FormRow label="End date" error={errors?.endDate?.message}>
        <Input
          type="text"
          id="endDate"
          disabled={isEditing}
          {...register("endDate", {
            required: "This field is required",
          })}
          autoComplete="off"
        />
      </FormRow>

      <FormRow label="Number of nights" error={errors?.numNights?.message}>
        <Input
          type="number"
          id="numNights"
          disabled={isEditing}
          {...register("numNights", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Number of nights should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Number of guests" error={errors?.numGuests?.message}>
        <Input
          type="number"
          id="numGuests"
          disabled={isEditing}
          {...register("numGuests", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Number of Guests should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Total price" error={errors?.totalPrice?.message}>
        <Input
          type="number"
          id="totalPrice"
          disabled={isEditing}
          {...register("totalPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isEditing}>Edit Booking </Button>
      </FormRow>
    </Form>
  );
}

export default EditBookingForm;
