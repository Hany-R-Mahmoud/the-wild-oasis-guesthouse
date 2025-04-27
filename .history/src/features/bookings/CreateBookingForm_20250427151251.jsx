import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

import FormRow from "../../ui/FormRow";

import { useCreateBooking } from "./useCreateBooking";
import styled from "styled-components";

const Select = styled.select`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0%.8rem 1.2rem;
  box-shadow: var() (--shadow-sm);
`;

function CreateBookingForm({ onCloseModal }) {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const { isCreating, createBooking } = useCreateBooking();

  function onSubmit(data) {
    console.log(data);

    createBooking(data, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin name" error={errors?.cabins?.name.message}>
        <Input
          type="text"
          id="cabins.name"
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
          {...register("guests.email", {
            required: "This field is required",
          })}
          autoComplete="off"
        />
      </FormRow>

      <FormRow label="Status" error={errors?.status?.message}>
        <Select
          id="status"
          disabled={isCreating}
          {...register("status", {
            required: "This field is required",
          })}
          autoComplete="off"
        >
          <option value="">--Please choose an option--</option>
          <option value="unconfirmed">unconfirmed</option>
          <option value="checked-in">checked-in</option>
          <option value="checked-out">checked-out</option>
        </Select>
      </FormRow>

      <FormRow label="Start date" error={errors?.startDate?.message}>
        <Input
          type="text"
          id="startDate"
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
          {...register("totalPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>
      {/* <FormRow label="Status" error={errors?.status?.message}>
        <select
          name="Status"
          id="status"
          disabled={isWorking}
          {...register("status", {
            required: "This field is required",
          })}
        >
          <option value="">--Please choose an option--</option>
          <option value="unconfirmed">Dog</option>
          <option value="checked-in">Cat</option>
          <option value="checked-out">Hamster</option>
        </select>

        <Input type="number" />
      </FormRow> */}
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>Create new Booking</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
