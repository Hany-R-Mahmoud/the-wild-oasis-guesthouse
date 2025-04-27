import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateBooking } from "./useCreateBooking";
import { useEditBooking } from "./useEditBooking";

function CreateBookingForm({ BookingToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = BookingToEdit;
  const isEditSession = Boolean(editId);

  console.log(BookingToEdit);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  // console.log(isEditSession);
  const { errors } = formState;

  const { isCreating, createBooking } = useCreateBooking();

  const { isEditing, editBooking } = useEditBooking();

  const isWorking = isCreating || isEditing;

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
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
          autoComplete="off"
        />
      </FormRow>

      <FormRow label="Number of nights" error={errors?.numNights?.message}>
        <Input
          type="number"
          id="numNights"
          disabled={isWorking}
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
          disabled={isWorking}
          {...register("numGuests", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Number of Guests should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Cabin price" error={errors?.cabinPrice?.message}>
        <Input
          type="number"
          id="cabinPrice"
          disabled={isWorking}
          {...register("cabinPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Extras price" error={errors?.extrasPrice?.message}>
        <Input
          type="number"
          id="extrasPrice"
          disabled={isWorking}
          {...register("extrasPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Total price" error={errors?.totalPrice?.message}>
        <Input
          type="number"
          id="totalPrice"
          disabled={isWorking}
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
          disabled={isWorking}
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
        <Button disabled={isCreating}>
          {isEditSession ? "Edit Booking" : "Create new Booking"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
