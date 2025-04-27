import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

import FormRow from "../../ui/FormRow";

import { useCreateBooking } from "./useCreateBooking";

function CreateBookingForm({ onCloseModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { isCreating, createBooking } = useCreateBooking();

  function onSubmit(data) {
    // const image = typeof data.image === "string" ? data.image : data.image[0];
    // if (isEditSession)
    //   editCabin(
    //     { newCabinData: { ...data, image }, id: editId },
    //     {
    //       onSuccess: () => {
    //         reset();
    //         onCloseModal?.();
    //       },
    //     }
    //   );
    // else
    //   createCabin(
    //     { ...data, image: image },
    //     {
    //       onSuccess: () => {
    //         reset();
    //         onCloseModal?.();
    //       },
    //     }
    //   );
  }

  return (
    // cabin name, prices, should come from saved cabins, just by choosing a cabin
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin name" error={errors?.status?.message}>
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
      <FormRow label="Guest name" error={errors?.status?.message}>
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
      <FormRow label="Guest email" error={errors?.status?.message}>
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
        <Input
          type="text"
          id="status"
          disabled={isCreating}
          {...register("status", {
            required: "This field is required",
          })}
          autoComplete="off"
        />
      </FormRow>

      <FormRow label="Start date" error={errors?.name?.message}>
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
      <FormRow label="End date" error={errors?.name?.message}>
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

      <FormRow label="Total price" error={errors?.cabinPrice?.message}>
        <Input
          type="number"
          id="totalPrice"
          disabled={isCreating}
          {...register("totalPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Extras price" error={errors?.extrasPrice?.message}>
        <Input
          type="number"
          id="extrasPrice"
          disabled={isCreating}
          {...register("extrasPrice", {
            required: "This field is required",
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

      <FormRow label="Breakfast" error={errors?.hasBreakfast?.message}>
        <Input
          type="number"
          id="hasBreakfast"
          disabled={isCreating}
          {...register("hasBreakfast", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {/* <FormRow label="Payment" error={errors?.isPaid?.message}>
        <Input
          type="number"
          id="isPaid"
          disabled={isWorking}
          {...register("isPaid", {
            required: "This field is required",
          })}
        />
      </FormRow> */}

      {/* <FormRow label="Observations" error={errors?.observations?.message}>
        <Input
          type="text"
          id="observations"
          disabled={isWorking}
          defaultValue={0}
          {...register("observations", {
            required: "This field is required",
          })}
        />
      </FormRow> */}

      {/* <FormRow label="Start Date" error={errors?.startDate?.message}>
        <Input
          type="text"
          id="startDate"
          disabled={isWorking}
          defaultValue={0}
          {...register("startDate", {
            required: "This field is required",
          })}
        />
      </FormRow>
       */}
      {/* <FormRow label="End Date" error={errors?.endDate?.message}>
        <Input
          type="text"
          id="endDate"
          disabled={isWorking}
          defaultValue={0}
          {...register("endDate", {
            required: "This field is required",
          })}
        />
      </FormRow> */}

      {/* <FormRow label="Created at" error={errors?.created_at?.message}>
        <Input
          type="text"
          id="created_at"
          disabled={isWorking}
          defaultValue={0}
          {...register("created_at", {
            required: "This field is required",
          })}
        />
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
