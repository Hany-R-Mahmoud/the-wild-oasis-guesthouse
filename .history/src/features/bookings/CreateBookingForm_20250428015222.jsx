import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

import FormRow from "../../ui/FormRow";

import { useCreateBooking } from "./useCreateBooking";
import styled from "styled-components";
import { useReadGuests } from "../guests/useReadGuests";
import Spinner from "../../ui/Spinner";
import { useReadCabins } from "../cabins/useReadCabins";
import { useCreateGuest } from "../guests/useCreateGuest";
import { useEffect, useState } from "react";
import Heading from "../../ui/Heading";
import { Flag } from "../../ui/Flag";
import { differenceInDays, isBefore, isDate, startOfToday } from "date-fns";
import { useReadSettings } from "../settings/useReadSettings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Select = styled.select`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0%.8rem 1.2rem;
  box-shadow: var() (--shadow-sm);
`;

function CreateBookingForm() {
  const [isGuestForm, setIsGuestForm] = useState(true);
  const [guestId, setGuestId] = useState(null);
  const { createGuest, isCreatingGuest, guestData } = useCreateGuest();

  const { guests, isLoadingGuests } = useReadGuests();
  const { cabins, isLoading: isLoadingCabins } = useReadCabins();
  const { settings, isLoading: isLoadingettings } = useReadSettings();

  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  const { isCreating, createBooking } = useCreateBooking();
  const navigate = useNavigate();

  // on submit create guest

  function onSubmitGuest(data) {
    createGuest(data);
    setIsGuestForm((isForm) => !isForm);
    console.log(data);
  }

  useEffect(() => {
    if (guestData) {
      console.log(guestData);
      setGuestId(() => guestData.id);
      console.log(guestId);
    }
  }, [guestData]);

  // on submit create booking

  function onSubmit(data) {
    // setGuestId(() => guestData.id);
    // console.log(guestId);

    const numNights = differenceInDays(
      new Date(data.endDate),
      new Date(data.startDate)
    );

    const today = startOfToday();

    // filter dates
    if (numNights < 1) {
      toast.error("Start date must be before end date");
      return;
    }

    if (
      numNights < settings.minBookingLength ||
      numNights > settings.maxBookingLength
    ) {
      toast.error(
        `${settings.minBookingLength} - ${settings.maxBookingLength}`
      );
      return;
    }
    if (isBefore(new Date(data.startDate), today)) {
      toast.error("You can't start a booking before today");
      return;
    }

    // cabin price

    const reservedCabin = cabins
      .filter((cabin) => cabin.id === Number(data.cabinId))
      .at(0);
    const cabinPrice =
      (reservedCabin.regularPrice - reservedCabin.discount) * numNights;

    //extrasPrice
    const extrasPrice = data.hasBreakfast
      ? settings.breakfastPrice * numNights * data.numGuests
      : 0;
    //totalPrice
    const totalPrice = cabinPrice + extrasPrice;

    console.log(guestId);
    console.log(guestData);

    const finalData = {
      cabinPrice,
      extrasPrice,
      totalPrice,
      isPaid: data.isPaid,
      numNights,
      cabinId: Number(data.cabinId),
      numGuests: Number(data.numGuests),
      guestId: Number(guestData.id),
      hasBreakfast: data.hasBreakfast,
      status: data.status,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
    };

    console.log(finalData);

    createBooking(finalData, {
      onSuccess: () => {
        navigate(`/bookings`);
      },
    });

    // createBooking(data, {
    //   onSuccess: () => {
    //     reset();
    //     onCloseModal?.();
    //   },
    // });
  }
  if (isLoadingGuests || isLoadingCabins || isCreatingGuest) return <Spinner />;
  return (
    <>
      {" "}
      {isGuestForm ? (
        <>
          <Heading as="h1">Create Guest</Heading>
          <Form
            onSubmit={handleSubmit(onSubmitGuest)}
            // type={onCloseModal ? "modal" : "regular"}
            type="regular"
          >
            <FormRow label="Guest Name" error={errors?.fullName?.message}>
              <Input
                type="text"
                id="fullName"
                disabled={isCreatingGuest}
                {...register("fullName", {
                  required: "This field is required",
                })}
                autoComplete="off"
              />
            </FormRow>
            <FormRow label="Guest email" error={errors?.email?.message}>
              <Input
                type="text"
                id="email"
                disabled={isCreatingGuest}
                {...register("email", {
                  required: "This field is required",
                })}
                autoComplete="off"
              />
            </FormRow>
            <FormRow label="National ID" error={errors?.nationalID?.message}>
              <Input
                type="text"
                id="nationalID"
                disabled={isCreatingGuest}
                {...register("nationalID", {
                  required: "This field is required",
                })}
                autoComplete="off"
              />
            </FormRow>
            <FormRow label="Nationality" error={errors?.nationality?.message}>
              <Input
                type="text"
                id="nationality"
                disabled={isCreatingGuest}
                {...register("nationality", {
                  required: "This field is required",
                })}
                autoComplete="off"
              />
            </FormRow>
            <FormRow label="Country Flag" error={errors?.countryFlag?.message}>
              <Input
                type="text"
                id="countryFlag"
                disabled={isCreatingGuest}
                {...register("countryFlag", {
                  required: "This field is required",
                })}
                autoComplete="off"
              />
            </FormRow>

            <FormRow>
              {/* type is an HTML attribute! */}
              <Button
                variation="secondary"
                type="reset"
                onClick={() => reset()}
              >
                Cancel
              </Button>
              <Button disabled={isCreatingGuest}>Create new Guest</Button>
            </FormRow>
          </Form>
        </>
      ) : (
        <>
          <Guest>
            <h2>Guest Details</h2>
            <p>Name: {guestData[0]?.fullName}</p>
            <p>Email: {guestData[0]?.email}</p>
            <p>National ID: {guestData[0]?.nationalID}</p>
            <p>Nationality: {guestData[0]?.nationality}</p>
          </Guest>
          <Heading as="h1">CreateBooking</Heading>
          <Form onSubmit={handleSubmit(onSubmit)} type="regular">
            <FormRow label="Cabin name" error={errors?.cabins?.name.message}>
              <Select
                type="text"
                id="cabinId"
                disabled={isCreating}
                {...register("cabinId", {
                  required: "This field is required",
                })}
                autoComplete="off"
              >
                {cabins.map((cabin) => (
                  <option key={cabin.id} value={cabin.id}>
                    {cabin.name}
                  </option>
                ))}
              </Select>
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
                type="date"
                id="startDate"
                disabled={isCreating}
                {...register("startDate", {
                  required: "This field is required",
                  validate:
                    isDate(getValues().startDate) ||
                    "You must choose a valid date",
                })}
                autoComplete="off"
              />
            </FormRow>
            <FormRow label="End date" error={errors?.endDate?.message}>
              <Input
                type="date"
                id="endDate"
                disabled={isCreating}
                {...register("endDate", {
                  required: "This field is required",
                  validate:
                    isDate(getValues().endDate) ||
                    "You must choose a valid date",
                })}
                autoComplete="off"
              />
            </FormRow>

            <FormRow
              label="Number of guests"
              error={errors?.numGuests?.message}
            >
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

            <FormRow label="Payment" error={errors?.isPaid?.message}>
              <Select
                id="isPaid"
                disabled={isCreating}
                {...register("isPaid", {
                  required: "This field is required",
                })}
                autoComplete="off"
              >
                <option value="">--Please choose an option--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Select>
            </FormRow>
            <FormRow label="Breakfast" error={errors?.hasBreakfast?.message}>
              <Select
                id="hasBreakfast"
                disabled={isCreating}
                {...register("hasBreakfast", {
                  required: "This field is required",
                })}
                autoComplete="off"
              >
                <option value="">--Please choose an option--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Select>
            </FormRow>
            <FormRow label="Observations" error={errors?.observations?.message}>
              <Input
                type="text"
                value=""
                id="observations"
                disabled={isCreating}
                {...register("observations")}
                autoComplete="off"
              />
            </FormRow>

            <FormRow>
              <Button
                variation="secondary"
                type="reset"
                onClick={() => reset()}
              >
                Cancel
              </Button>
              <Button disabled={isCreating}>Create new Booking</Button>
            </FormRow>
          </Form>
        </>
      )}
    </>
  );
}

export default CreateBookingForm;
